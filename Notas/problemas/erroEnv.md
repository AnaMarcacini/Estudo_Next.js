Problema

➜  node -r dotenv/config ./scripts/seed.js
An error occurred while attempting to seed the database: VercelPostgresError: VercelPostgresError - 'missing_connection_string': You did not supply a 'connectionString' and no 'POSTGRES_URL' env var was found.
    at createPool (/home/anamarcacini/GIT/AnaMarcacini/nextjs-dashboard/node_modules/@vercel/postgres/dist/chunk-PKSWROYW.cjs:158:11)
    at Object.get (/home/anamarcacini/GIT/AnaMarcacini/nextjs-dashboard/node_modules/@vercel/postgres/dist/chunk-PKSWROYW.cjs:201:16)
    at main (/home/anamarcacini/GIT/AnaMarcacini/nextjs-dashboard/scripts/seed.js:164:27)
    at Object.<anonymous> (/home/anamarcacini/GIT/AnaMarcacini/nextjs-dashboard/scripts/seed.js:174:1)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'missing_connection_string'
}


 resolvendo copiando cada variavel nas variaveis do sistema


export POSTGRES_URL_NON_POOLING="postgres://......"



anamarcacini in nextjs-dashboard on  Tutorial [✘!?] 
➜  export 
ANDROID_HOME=/home/anamarcacini/Android/android-sdk
BUN_INSTALL=/home/anamarcacini/.bun
CHROME_DESKTOP=code-url-handler.desktop
CLUTTER_IM_MODULE=ibus
COLORFGBG='15;0'
COLORTERM=truecolor
DBUS_SESSION_BUS_ADDRESS='unix:path=/run/user/1000/bus'
DESKTOP_SESSION=plasma
DISPLAY=:1
GDK_BACKEND=x11
GDMSESSION=plasma
GIT_ASKPASS=/usr/share/code/resources/app/extensions/git/dist/askpass.sh
GPG_AGENT_INFO=/run/user/1000/gnupg/S.gpg-agent:0:1
GTK2_RC_FILES=/etc/gtk-2.0/gtkrc:/home/anamarcacini/.gtkrc-2.0:/home/anamarcacini/.config/gtkrc-2.0
GTK_IM_MODULE=ibus
GTK_MODULES=gail:atk-bridge
GTK_RC_FILES=/etc/gtk/gtkrc:/home/anamarcacini/.gtkrc:/home/anamarcacini/.config/gtkrc
HOME=/home/anamarcacini
IM_CONFIG_PHASE=1
KDE_APPLICATIONS_AS_SCOPE=1
KDE_FULL_SESSION=true
KDE_SESSION_UID=1000
KDE_SESSION_VERSION=5
KONSOLE_DBUS_SERVICE=:1.100
KONSOLE_DBUS_SESSION=/Sessions/1
KONSOLE_DBUS_WINDOW=/Windows/1
KONSOLE_VERSION=220403
LANG=en_US.UTF-8
LANGUAGE=''
LC_ADDRESS=pt_BR.UTF-8
LC_CTYPE=pt_BR.UTF-8
LC_IDENTIFICATION=pt_BR.UTF-8
LC_MEASUREMENT=pt_BR.UTF-8
LC_MONETARY=pt_BR.UTF-8
LC_NAME=pt_BR.UTF-8
LC_NUMERIC=pt_BR.UTF-8
LC_PAPER=pt_BR.UTF-8
LC_TELEPHONE=pt_BR.UTF-8
LC_TIME=pt_BR.UTF-8
LESS=-R
LIBVIRT_DEFAULT_URI=qemu:///system
LOGNAME=anamarcacini
LSCOLORS=Gxfxcxdxbxegedabagacad
LS_COLORS='rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:'
N_PREFIX=/home/anamarcacini/n
OLDPWD=/home/anamarcacini/GIT/AnaMarcacini/nextjs-dashboard
ORIGINAL_XDG_CURRENT_DESKTOP=KDE
PAGER=less
PATH=/home/anamarcacini/.bun/bin:/home/anamarcacini/.bun/bin:/home/anamarcacini/.cargo/bin:/home/anamarcacini/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin:/home/anamarcacini/Tools/Android/android-studio/bin:/home/anamarcacini/Android/android-sdk/emulator:/home/anamarcacini/Android/android-sdk/tools:/home/anamarcacini/Android/android-sdk/tools/bin:/home/anamarcacini/Android/android-sdk/platform-tools:/home/anamarcacini/Tools/Java/OpenJDK/jdk-11/bin:/home/anamarcacini/n/bin:/home/anamarcacini/Tools/Android/android-studio/bin:/home/anamarcacini/Android/android-sdk/emulator:/home/anamarcacini/Android/android-sdk/tools:/home/anamarcacini/Android/android-sdk/tools/bin:/home/anamarcacini/Android/android-sdk/platform-tools:/home/anamarcacini/Tools/Java/OpenJDK/jdk-11/bin
POSTGRES_DATABASE=verceldb
POSTGRES_HOST=ep-mute-mode-a4raw8sk-pooler.us-east-1.aws.neon.tech
POSTGRES_PASSWORD=X2lHBUYT0bOL
POSTGRES_PRISMA_URL='postgres://default:X2lHBUYT0bOL@ep-mute-mode-a4raw8sk-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15'
POSTGRES_URL='postgres://default:X2lHBUYT0bOL@ep-mute-mode-a4raw8sk-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require'
POSTGRES_URL_NON_POOLING='postgres://default:X2lHBUYT0bOL@ep-mute-mode-a4raw8sk.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require'
POSTGRES_URL_NO_SSL=postgres://default:X2lHBUYT0bOL@ep-mute-mode-a4raw8sk-pooler.us-east-1.aws.neon.tech:5432/verceldb
POSTGRES_USER=default
PROFILEHOME=''
PWD=/home/anamarcacini/GIT/AnaMarcacini/nextjs-dashboard
QT_ACCESSIBILITY=1
QT_AUTO_SCREEN_SCALE_FACTOR=0
QT_IM_MODULE=ibus
SESSION_MANAGER=local/DET-35131:@/tmp/.ICE-unix/2917,unix/DET-35131:/tmp/.ICE-unix/2917
SHELL=/usr/bin/zsh
SHELL_SESSION_ID=b6ed437a9a7a47f7ad9128a560e4b669
SHLVL=2
SPACESHIP_CONFIG=''
SPACESHIP_ROOT=/home/anamarcacini/.oh-my-zsh/custom/themes/spaceship-prompt
SPACESHIP_VERSION=4.14.0
SYSTEMD_EXEC_PID=2457
TERM=xterm-256color
TERM_PROGRAM=vscode
TERM_PROGRAM_VERSION=1.84.2
USER=anamarcacini
USER_ZDOTDIR=/home/anamarcacini
VSCODE_GIT_ASKPASS_EXTRA_ARGS=--ms-enable-electron-run-as-node
VSCODE_GIT_ASKPASS_MAIN=/usr/share/code/resources/app/extensions/git/dist/askpass-main.js
VSCODE_GIT_ASKPASS_NODE=/usr/share/code/code
VSCODE_GIT_IPC_HANDLE=/run/user/1000/vscode-git-0a1c485053.sock
VSCODE_INJECTION=1
WINDOWID=96468999
WINDOWPATH=2
XAUTHORITY=/run/user/1000/gdm/Xauthority
XCURSOR_SIZE=24
XCURSOR_THEME=breeze_cursors
XDG_CONFIG_DIRS=/home/anamarcacini/.config/kdedefaults:/etc/xdg/xdg-plasma:/etc/xdg:/usr/share/kubuntu-default-settings/kf5-settings
XDG_CURRENT_DESKTOP=KDE
XDG_DATA_DIRS=/usr/share/plasma:/usr/share/gnome:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop
XDG_RUNTIME_DIR=/run/user/1000
XDG_SEAT=seat0
XDG_SESSION_CLASS=user
XDG_SESSION_DESKTOP=plasma