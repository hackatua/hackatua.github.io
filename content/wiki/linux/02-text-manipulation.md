---
title: 2. Text Manipulation
---

In Linux, nerly everything you deal with directly is a file. Most of the application configuration files in Linux are text files. In order to change the configuration of an application you only have to modify the configuration file and restart it.

We will be using a Apache configuration file as sample for this chapter:

* [httpd.conf](httpd.conf)

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