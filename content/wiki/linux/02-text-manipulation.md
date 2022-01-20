---
title: 2. Text Manipulation
index: 2
---

In Linux, nerly everything you deal with directly is a file. Most of the application configuration files in Linux are text files. In order to change the configuration of an application you only have to modify the configuration file and restart it.

We will be using a Apache configuration file as sample for this chapter:

- [httpd.conf](httpd.conf)

## Viewing file contents

### cat

As we've seen in the first chapter, the easiest way to see a file is the `cat` command.

```bash
┌──(kali㉿kali)-[~]
└─$ cat file.txt
A text
```

The problem with this command for showing file contents is that it will stream all the file untils it comens to the end of it. This may be a problem if the file is to long.

### head

The `head` command shows the beginning of a file. By default, this command shows the first 10 lines of a file.

```bash
┌──(kali㉿kali)-[~]
└─$ head httpd.conf
###*********************************************************
###*  Web-Developer Server Suite                           *
###*  external link: http://sourceforge.net/projects/webdeveloper         *
###*  devside_net@users.sourceforge.net                    *
###*  v1.95-httpd22-ssl                                    *
###*********************************************************


ThreadsPerChild 250
MaxRequestsPerChild  0
```

If you want to see more or lees lines you can set the number of lines putting the number of lines to show after a "-":

```bash
┌──(kali㉿kali)-[~]
└─$ head -5 httpd.conf
###*********************************************************
###*  Web-Developer Server Suite                           *
###*  external link: http://sourceforge.net/projects/webdeveloper         *
###*  devside_net@users.sourceforge.net                    *
###*  v1.95-httpd22-ssl
```

### tail

The `tail` command, in oposition to the `head` command, shows the last lines of a file. As `head` command, as default shows the last 10 lines.

```bash
┌──(kali㉿kali)-[~]
└─$ tail httpd.conf
     Alias /phpMyAdmin "C:/www/phpMyAdmin"
</IfModule>

<Directory "C:/www/phpMyAdmin">
     Options None
     AllowOverride None
     order deny,allow
     deny from all
     allow from 127.0.0.1
</Directory>
```

If you want to show more or less lines you can specify the number of lines after a "-":

```bash
┌──(kali㉿kali)-[~]
└─$ tail -5  httpd.conf
     AllowOverride None
     order deny,allow
     deny from all
     allow from 127.0.0.1
</Directory>
```

### nl

The `nl` (_number lines_) command is lika `cat` commnand, but shows the number of the lines. This is handy for reference changes and come back to the same palces within the file.

```bash
┌──(kali㉿kali)-[~]
└─$ nl httpd.conf
     1  ###*********************************************************
     2  ###*  Web-Developer Server Suite                           *
     3  ###*  external link: http://sourceforge.net/projects/webdeveloper         *
     4  ###*  devside_net@users.sourceforge.net                    *
     5  ###*  v1.95-httpd22-ssl                                    *
     6  ###*********************************************************


     7  ThreadsPerChild 250

     # ... continues until the end of the file
```

### grep

The `grep` command allows to filter the content of a file for display. In order to use it, you can pipe ("|") the result for using `cat` in a file.

```bash
┌──(kali㉿kali)-[~]
└─$ cat httpd.conf | grep "^LoadModule"
LoadModule alias_module modules/mod_alias.so
LoadModule authz_host_module modules/mod_authz_host.so
LoadModule autoindex_module modules/mod_autoindex.so
LoadModule dir_module modules/mod_dir.so
LoadModule log_config_module modules/mod_log_config.so
LoadModule mime_module modules/mod_mime.so
LoadModule rewrite_module modules/mod_rewrite.so
LoadModule setenvif_module modules/mod_setenvif.so
LoadModule php5_module "C:/www/php5/php5apache2.dll"
```

As we can see in the code bellow, we are filtering the lines that start with "LoadModule". In this way we can show only the loaded modules.

We can use the `-v` argument to invert selection. This is handy if you want to hide the comment lines (the lines starting with "#"):

```bash
┌──(kali㉿kali)-[~]
└─$ cat httpd.conf | grep -v "^#"


ThreadsPerChild 250
MaxRequestsPerChild  0

Listen 80

ServerRoot "/www/Apache22"
DocumentRoot "/THDL/thdl-site"
 was /www/webroot

 # ... continues until the end of the file
```

### sed

The `sed` (_stream editor_) command allows you search for occurrendes of a word or a text pattern and then perform an actiion on it.

```bash
┌──(kali㉿kali)-[~]
└─$ cat file.txt
some text

┌──(kali㉿kali)-[~]
└─$ sed s/some/Some/g file.txt
Some text
```

A we can se in the code example, we have replaced the "some" word with "Some", making uppercase the first letter. In this example, we have used `s/regexp/replacement/` command. The `g` at the then is the _global regexp flag_, that indicates to replace all the matches in the file, not only the first one.

We can use `sed` for removing empty lines. Working with `grep` and `head` we show the first 10 lines with content (uncommented and non empty):

```bash
┌──(kali㉿kali)-[~]
└─$ cat httpd.conf | grep -v "^#" | sed /^$/d | head
ThreadsPerChild 250
MaxRequestsPerChild  0
Listen 80
ServerRoot "/www/Apache22"
DocumentRoot "/THDL/thdl-site"
 was /www/webroot
ServerName localhost:80
ServerAdmin admin@localhost
ErrorLog logs/error.log
LogLevel error
```

### more

The `more` command displays a page of a file at a time, and allows you to go to the next page pressing _SPACE-BAR_ or _ARROW-DOWN_ keys,o to the previous page with _ARROW-UP_ key, or advence a line with the _INTRO_ key. To quit go to the end of the file or press _q_ key.

```bash
┌──(kali㉿kali)-[~]
└─$ more httpd.conf

###*********************************************************
###*  Web-Developer Server Suite                           *
###*  external link: http://sourceforge.net/projects/webdeveloper         *
###*  devside_net@users.sourceforge.net                    *
###*  v1.95-httpd22-ssl                                    *
###*********************************************************


ThreadsPerChild 250
MaxRequestsPerChild  0

Listen 80
--More--(6%)
```

### less

The `less` command is like `more` command, but with additional functionality. With `less` you can scroll in te file and also filter it for terms.

``` bash
┌──(kali㉿kali)-[~]
└─$ less httpd.conf
```

To search in the file you have to presh the slash key (_/_). After that you can type and hit _INTRO_. `less` will hightlight the coincidences. You can press _n_(next) to go to the next coincidence. In order to quit, like with `more`, press the _q_ key.