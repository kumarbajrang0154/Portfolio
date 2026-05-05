#!/usr/bin/env bash

set -euo pipefail
trap 'echo "Error on line $LINENO. Exiting." >&2; exit 1' ERR

# Fedora-based full-stack JS development environment setup script
# Installs NVM, Node.js LTS, Git, and optionally VS Code.

USER_HOME="${HOME:-/home/$(id -un)}"
BASHRC="$USER_HOME/.bashrc"
BASH_PROFILE="$USER_HOME/.bash_profile"
NVM_DIR="$USER_HOME/.nvm"
SUDO_CMD=""

if [ "$(id -u)" -ne 0 ]; then
  if command -v sudo >/dev/null 2>&1; then
    SUDO_CMD="sudo"
  else
    echo "This script requires sudo privileges or root access." >&2
    exit 1
  fi
fi

command_exists() {
  command -v "$1" >/dev/null 2>&1
}

echo "==> Detecting Fedora package manager"
if command_exists dnf; then
  PKG_MANAGER="dnf"
elif command_exists yum; then
  PKG_MANAGER="yum"
else
  echo "No supported package manager found (dnf/yum required)." >&2
  exit 1
fi

install_pkg() {
  local pkg="$1"
  echo "==> Installing $pkg"
  $SUDO_CMD "$PKG_MANAGER" install -y "$pkg"
}

echo "==> Updating system packages"
$SUDO_CMD "$PKG_MANAGER" update -y

echo "==> Installing required packages: git, curl, wget, ca-certificates"
install_pkg git
install_pkg curl
install_pkg wget
install_pkg ca-certificates
install_pkg gnupg2
install_pkg xz
install_pkg make
install_pkg gcc-c++

if command_exists git; then
  echo "Git installed: $(git --version)"
else
  echo "Git installation failed." >&2
  exit 1
fi

if [ ! -f "$BASHRC" ]; then
  echo "==> Creating missing .bashrc"
  touch "$BASHRC"
fi

if [ ! -f "$BASH_PROFILE" ]; then
  echo "==> Creating missing .bash_profile"
  printf '%s\n' '# .bash_profile source .bashrc if it exists' 'if [ -f "$HOME/.bashrc" ]; then' '  . "$HOME/.bashrc"' 'fi' >> "$BASH_PROFILE"
fi

if ! grep -q 'source \"\$HOME/.bashrc\"' "$BASH_PROFILE" 2>/dev/null; then
  echo "==> Ensuring .bash_profile sources .bashrc"
  cat >> "$BASH_PROFILE" <<'EOF'
# Load .bashrc if present
if [ -f "$HOME/.bashrc" ]; then
  . "$HOME/.bashrc"
fi
EOF
fi

if [ ! -d "$NVM_DIR" ]; then
  echo "==> Installing NVM"
  export NVM_DIR="$NVM_DIR"
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.9/install.sh | bash
else
  echo "NVM already installed in $NVM_DIR"
fi

nvm_init_snippet=$(cat <<'EOF'
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
EOF
)

if ! grep -Fq 'export NVM_DIR="$HOME/.nvm"' "$BASHRC"; then
  echo "==> Adding NVM initialization to .bashrc"
  cat >> "$BASHRC" <<'EOF'
$NVM_INIT_SNIPPET
EOF
fi

# shellcheck disable=SC1090
source "$BASHRC"

if ! command_exists nvm; then
  if [ -s "$NVM_DIR/nvm.sh" ]; then
    # shellcheck disable=SC1090
    . "$NVM_DIR/nvm.sh"
  fi
fi

if ! command_exists nvm; then
  echo "NVM is not available after installation." >&2
  exit 1
fi

echo "NVM installed: $(nvm --version)"

echo "==> Installing latest Node.js LTS"
nvm install --lts
nvm alias default 'lts/*'
nvm use default

if command_exists node && command_exists npm; then
  echo "Node installed: $(node --version)"
  echo "npm installed: $(npm --version)"
else
  echo "Node or npm installation failed." >&2
  exit 1
fi

if [ "$(basename "$SHELL")" != "bash" ]; then
  if command_exists chsh; then
    echo "==> Setting bash as the default shell"
    $SUDO_CMD chsh -s /bin/bash "$(id -un)" || true
  else
    echo "chsh command not found; please set bash as your default shell manually." >&2
  fi
else
  echo "Default shell is already bash"
fi

echo "==> Validating PATH and NVM setup"
if ! grep -Fq 'NVM_DIR' "$BASHRC"; then
  echo "Warning: NVM initialization is not present in $BASHRC" >&2
else
  echo "NVM initialization confirmed in $BASHRC"
fi

if ! command_exists npm; then
  echo "npm is not available in the current shell." >&2
  echo "Try opening a new terminal or running: source ~/.bashrc" >&2
  exit 1
fi

if ! command_exists git; then
  echo "Git is not available after installation." >&2
  exit 1
fi

# Optional: install VS Code if available and not installed
if ! command_exists code; then
  echo "==> Installing Visual Studio Code (optional)"
  if [ ! -f /etc/yum.repos.d/vscode.repo ]; then
    cat <<'EOF' | $SUDO_CMD tee /etc/yum.repos.d/vscode.repo >/dev/null
[code]
name=Visual Studio Code
baseurl=https://packages.microsoft.com/yumrepos/vscode
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc
EOF
  fi
  $SUDO_CMD "$PKG_MANAGER" check-update || true
  install_pkg code || echo "VS Code installation skipped or unavailable." >&2
fi

if command_exists code; then
  echo "VS Code installed: $(code --version | head -n 1)"
else
  echo "VS Code is not installed. This is optional and can be installed later." >&2
fi

echo "==> Setup complete"
echo "Open a new terminal or run: source ~/.bashrc"

echo "Summary:"
echo "  Git: $(git --version)"
echo "  NVM: $(nvm --version)"
echo "  Node: $(node --version)"
echo "  npm: $(npm --version)"
if command_exists code; then
  echo "  VS Code: $(code --version | head -n 1)"
fi
