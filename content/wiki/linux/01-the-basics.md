---
title: 1. The Basics
---

## Terms and concepts

### Binaries

Are **files that can be executed**. Those files generally reside in `/usr/bin`, `/usr/sbin`, `/bin`,... and include utilities such as `ps`, `cat`, `ls`, `cd`, ...

### Case sensitivity

Unlike Windows, Linux is case sensistive. For Linux `Desktop` is different from `desktop`.

### Directory

Is the same concept as folder in Windows. Is a way to of organizing files in a hierarchical manner.

### Home

Normally, each Linux usera has his own `/home` directory. It's the default placee where the files created by an user are stored.

### Library

Programs and utilties shared between different applications. Are similar to Windows DDLs. Libraries generally reside in `/lib`.

### root

The user _root_ is the administartor or the superuser account. This user can do near everything in the system.

### Script

Is a series of commands run in an interpretive environment than converts each line to source code.

### Shell

This is an environment and interpreter for running commands on Linux. The most widely used shell is _Bash_.

### Terminal

Is the command line interface in which the shell interpreter runs.

## The Linux Filesystem

Linux uses a logical filesystem. At the very top of the filesystem structure is `/`, which is usually referred as the _root_ if the filesystem.

The most important subdirectories to know are:

- `/root`: The home directory of the all-powerful root users.
- `/etc`: Generally contains the Linux configuration files - files than contrl when and how programs start up.
- `/home`: The user's home directory.
- `/mnt`: Where otrhe filesystems are attached or mounted to the filesystem.
- `/media`: Where CDs and USB devices are usually attached or mounted to the filesystem.
- `/bin`: Where the application _binaries_ reside.
- `/lib`: Where the application _libraries_ reside

## Basic commands

### pwd

The _Present Current Directory_ commands shows the actual location in the directory structure.

```bash
┌──(kali㉿kali)-[~]
└─$ pwd
/home/kali
```

### whoami

Shows the name of the user which you're logged in as.

```bash
┌──(kali㉿kali)-[~]
└─$ whoami
kali
```

### cd

The _Change Directory_ command allows to select a new working directory.

```bash
┌──(kali㉿kali)-[~]
└─$ cd /etc/ssh 
                                                        
┌──(kali㉿kali)-[/etc/ssh]
└─$ pwd   
/etc/ssh
```

Depending on the arguments the command allows diffetent navigations.

* `cd` or `cd ~`: navigate to home direcory
* `cd ..`: navigates one level up. You can navigete more levels up adding mor dot pairs.
* `cd -`: navigates to the previus directory you've visited.

### ls

The `ls` command lists the contents of a directory.

```bash
┌──(kali㉿kali)-[~]
└─$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
```

You can use the `-l` argument to use a long listing format:

```bash
┌──(kali㉿kali)-[~]
└─$ ls -l 
total 32
drwxr-xr-x 2 kali kali 4096 Jan  5 11:45 Desktop
drwxr-xr-x 2 kali kali 4096 Jan  5 11:45 Documents
drwxr-xr-x 2 kali kali 4096 Jan  5 11:52 Downloads
drwxr-xr-x 2 kali kali 4096 Jan  5 11:45 Music
drwxr-xr-x 2 kali kali 4096 Jan  5 11:45 Pictures
drwxr-xr-x 2 kali kali 4096 Jan  5 11:45 Public
drwxr-xr-x 2 kali kali 4096 Jan  5 11:45 Templates
drwxr-xr-x 2 kali kali 4096 Jan  5 11:45 Videos
```

For showing the hidden files (those which starts with a dot) you can use the `-a` argument:

```bash
┌──(kali㉿kali)-[~]
└─$ ls -a    
.                 .cache     Downloads   .ICEauthority  Pictures   .tmux             .xsession-errors
..                .config    .face       .java          .pki       .tmux.conf        .xsession-errors.old
.bash_logout      Desktop    .face.icon  .local         .profile   .tmux.conf.local  .zsh_history
.bashrc           .dmrc      .gnupg      .mozilla       Public     Videos            .zshrc
.bashrc.original  Documents  .hushlogin  Music          Templates  .Xauthority
```

For listing the content for a different direcctory you can use the directory as argument:

```bash
┌──(kali㉿kali)-[~]
└─$ ls .tmux       
LICENSE.MIT  LICENSE.WTFPLv2  README.md
```

### man
The *Manual* command shows the manual page of the command.

```bash
┌──(kali㉿kali)-[~]
└─$ man ls
```

### --help argument

Shows a summarized explanation of the command. Not all commands have this argument.

```bash
┌──(kali㉿kali)-[~]
└─$ ls --help 
Usage: ls [OPTION]... [FILE]...
List information about the FILEs (the current directory by default).
Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

Mandatory arguments to long options are mandatory for short options too.
  -a, --all                  do not ignore entries starting with .
  -A, --almost-all           do not list implied . and ..
      --author               with -l, print the author of each file
...
```

### locate

The `locate` command will go through your entire filesystem and locate every occurrence of a that word:

```bash
┌──(kali㉿kali)-[~]
└─$ locate neofetch
/home/kali/.config/neofetch
/home/kali/.config/neofetch/config.conf
/usr/bin/neofetch
/usr/share/doc/neofetch
/usr/share/doc/neofetch/changelog.Debian.gz
/usr/share/doc/neofetch/copyright
/usr/share/man/man1/neofetch.1.gz
/var/lib/dpkg/info/neofetch.list
/var/lib/dpkg/info/neofetch.md5sums
```

If the database is not initalized, you can run `sudo updatedb`.

### whereis

Locates a binary file. It's important to consider that the command only searches in the `$PATH` varible.

```bash
┌──(kali㉿kali)-[~]
└─$ whereis neofetch
neofetch: /usr/bin/neofetch /usr/share/man/man1/neofetch.1.gz
```

### find

Is the most poweful and flexible command for searching utilities.

```bash
┌──(kali㉿kali)-[~]
└─$ sudo find / -type f -name neofetch
/usr/bin/neofetch
find: ‘/run/user/1000/gvfs’: Permission denied
```

### grep

The `grep` command allows to filter lines that matches a string or a regular expression.

```bash
┌──(kali㉿kali)-[~]
└─$ ps uax | grep calculator
kali       38018  0.0  0.0   6228  2272 pts/0    S+   09:35   0:00 grep --color=auto calculator
```

In this command, we are using de `ps aux` command to list all processes running in this system, and piping it to the `grep` command filtering with the keyword "calculator".

### cat

The _con**cat**enate_ command is usually used to display the content of a file, but it can also be used to create small files.

You can create a file using the redirect symbol `>` after the `cat` command.

```bash
┌──(kali㉿kali)-[~]
└─$ cat > sample_file.txt
Content of the sample file
```

When you hit enter with this command, the shell enters in _interactive mode_ and you can start to write the content of the file. To exit press CTRL+D.

After that, you can use the cat command to show the content without using the redirect symbot `>`.

```bash
┌──(kali㉿kali)-[~]
└─$ cat sample_file.txt
Content of the sample file
```

You can add more content to the file with the append symbol `>>`.

```bash
┌──(kali㉿kali)-[~]
└─$ cat > sample_file.txt
Some content to the file.

┌──(kali㉿kali)-[~]
└─$ cat sample_file.txt  
Some content to the file.

┌──(kali㉿kali)-[~]
└─$ cat >> sample_file.txt 
more content to the file

┌──(kali㉿kali)-[~]
└─$ cat sample_file.txt   
Some content to the file.more content to the file
```

### touch

This command was createdd to simply touch a file in order to change some of its details, such as the date it was created or modified. It can be also used to create a file if the file used as argument doesn't exists.

```bash
┌──(kali㉿kali)-[~]
└─$ touch touch_file.txt

┌──(kali㉿kali)-[~]
└─$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  touch_file.txt  Videos
```

### mkdir

The command _make directory_ is used to create a new directory.

```bash
┌──(kali㉿kali)-[~]
└─$ mkdir new_direcotory

┌──(kali㉿kali)-[~]
└─$ cd new_direcotory

┌──(kali㉿kali)-[~/new_direcotory]
└─$ pwd                     
/home/kali/new_direcotory
```

### cp

The _copy_ commands allows to copy a file or a directory. 

```bash
┌──(kali㉿kali)-[~/new_direcotory]
└─$ touch old.txt

┌──(kali㉿kali)-[~/new_direcotory]
└─$ cp old.txt new.txt

┌──(kali㉿kali)-[~/new_direcotory]
└─$ ls
new.txt  old.txt
```

### mv

The _move_ command can be used to move a file or to rename it.

```bash
┌──(kali㉿kali)-[~/new_direcotory]
└─$ ls
new.txt  old.txt

┌──(kali㉿kali)-[~/new_direcotory]
└─$ mv old.txt renamed.txt

┌──(kali㉿kali)-[~/new_direcotory]
└─$ ls
new.txt  renamed.txt
```

### rm

The _remove_ command allows to remove a files or directories.

```bash
┌──(kali㉿kali)-[~/new_direcotory]
└─$ ls
new.txt  renamed.txt

┌──(kali㉿kali)-[~/new_direcotory]
└─$ rm renamed.txt

┌──(kali㉿kali)-[~/new_direcotory]
└─$ ls
new.txt
```

To remove a directory, you have to use the recursive arguement `-r`.

```bash
┌──(kali㉿kali)-[~]
└─$ ls
Desktop  Documents  Downloads  Music  new_direcotory  Pictures  Public  Templates  Videos

┌──(kali㉿kali)-[~]
└─$ rm -r new_direcotory

┌──(kali㉿kali)-[~]
└─$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
```

## Exercises