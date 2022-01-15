---
title: Nmap
---

# Introducción

Nmap (Network Mapper) es una herramienta libre y opensource especializada en la exploración de redes y auditorías de seguridad.

Utiliza paquetes IP en bruto para determinar cuáles son los host actualmente disponibles en la red, qué servicios y versones de los mismos ofrecen estos hosts, qué sistema operativo está ejecutando, ...etc.

# Uso

- `nmap [params] {target}`

## Parámetros

- `--open`: muestra únicamente los puertos abiertos
- `--min-rate <value>`:
- `-oG <filename>`: exporta en formato grepeable
- `-oN <filename>`: exporta en formato nmap

### Host Discovery

- `-sn`/`-sP`: escaneo usando Ping (ICMP). Desabilita el escaneo de puertos.

<aside>
💡 <code class="language-text">-sP</code> es la nomenclatura antigua por el ICMP scan.
</aside>

<aside>
💡 Si realizamos este tipo de escaneo en una red local, nmap va a usar paquetes ARP para el escaneo, por lo que si el servidor tiene bloqueados los paquetes ICMP funcionaría. En caso contrario, si la red no es local, usaría paquetes ICMP y el firewall los bloquearía.
Se puede usar el parámetro <code class="language-text">--send-ip</code> para forzar el escenario de una red no local.
</aside>

Usa 4 técnicas diferentes para realizar este descubrimiento, 2 usando ICMP, y 2 usando TCP.

- `-Pn`: Trata todos los hosts del target como online. No realiza host discovery.
- `-n`: Deshabilita la resolución DNS
- `--traceroute`: Muestra el path hasta el host

### Scan techniques

Por defecto nmap intenta usar la técnica más adecuada para el entorno del escaneo.

- `-sS`: TCP SYN Stealth scan (half open scan)
- `-sT`: TCP connect scan (full open scan)

### Port specification

Si no se especifica el rango de puertos a escanear, nmap escane los 1000 puertos más usados.

- `-p <port ranges>`: esanea únicamente los puertos especificados. Ej:
  - `-p-`: escanea todos los puertos
  - `-p22`: escanea únicamente el puerto 22
  - `-p1-65535`: escanea del puerto 1 al 65535
  - `-p U:53,111,137,T:21-25,80,139,8080,S:9`: escanea los puertos especificados

### Service/version detection

- `-sV`: prueba los puertos abiertos para detectar el servicio y la versión de los mismos

### Scripts

- `-sC`: aplica los scripts por defecto (_default scripts_).
- `--script=<Lua scripts>`: aplica los scripts especificados. Admite una lista de directorios, de ficheros de scripts o de categorías de scripts. Ej:
  - `--script=banner`: ejecuta el script banner
  - `--script=ip-geolocation-*`: ejecuta todos los scripts que empiezan por “ip-geolocation-”

### OS detection

- `-O`: habilita la detección de sistema operativo

### Timing and performance

- `-T<0-5>`: aplica diferentes plantillas de tiempo (0 más lento a 5 más rápido)

### Evasión y spoofing de Firewalls/IDS

- `-f`: fragmetación de paquetes
- `-D <decoy1, decoy2, ...>`: esconde tu información a través de un señuelo
- `-g`: puerto origen del escaneo
- `--badsum`: envía paquetes TCP/UDP/SCTP con un checksum incorrecto

### Output

- `-v`: incrementa la verbosidad de la salida. Se pueden agregar más “v” para incrementar el nivel de verbosidad. Ej:
  - `-vv`
  - `-vvv`
- `--packet-trace`: mustra todos los paquetes envíados y recibidos en el escaneo

### Misc

- `--send-ip`: fuerza el uso de paquetes IP para poder simular un entorno real en una red local.
- `-A`: aplica detección de OS (`-O`), versiones y servicios (`-sV`), script scanning (`-sC`) y traceroute(`--traceroute`)

## Script engine

Se encuentran en `/usr/share/nmap/scripts`.

Para listar los scripts con un texto concreto podemos usar `ls -l /usr/share/nmap/scripts/*{termino de búsqueda}*`.

### Scripts

- `--script=banner`: similar a hacer usar netcat contra un puerto

### Categories

- `--script=vuln`: ejecuta los scripts para la detección de vulnerabilidades

## Ejemplos

### Host discovery mediante Ping (ICMP)

- `nmap -sn -v 192.168.0.70`

### Host discovery mediante ICMP forzando uso de IP

- `nmap -sn --send-ip -v 192.168.0.70`

### Host discovery mediante ICMP forzando uso de IP mostrando paquetes

- `nmap -sn --send-ip --packet-trace -v 192.168.0.70`

### Escaneo (SYN Stealth) de los 1000 puertos más comunes ignorando el host discovery y sin resolución DNS

- `nmap -n -Pn -v 192.168.0.70`

### Escaneo (TCP connect) a puertos específicos a toda la red

- `nmap -sT -p 80,443 192.168.0.0/24`

### Escaneo de versiones de servicios en puertos concretos ignorando host discovery y sin resolución DNS

- `nmap -n -Pn -v -sV -p22,80,443 192.168.0.70`

### Escaneo de versiones de servicios y sistema operativo en puertos concretos ignorando host discovery y sin resolución DNS

- `nmap -n -Pn -v -sV -O -p22,80,443 192.168.0.70`

### Escaneo (SYN Stealth) de los 1000 puertos más comunes ignorando el host discovery y sin resolución DNS, y con fragmentación de paquetes

- `nmap -n -Pn -v -f 192.168.0.70`

### Escaneo (SYN Stealth) de los 1000 puertos más comunes ignorando el host discovery y sin resolución DNS, y con señuelo

- `nmap -n -Pn -v -D 192.168.0.50 192.168.0.70`

### Escaneo (SYN Stealth) de los 1000 puertos más comunes ignorando el host discovery y sin resolución DNS, y con puerto origen definido

- `nmap -n -Pn -v -g 80 192.168.0.70`

### Escaneo (SYN Stealth) de los 1000 puertos más comunes ignorando el host discovery y sin resolución DNS, y con checksum erróneo

- `nmap -n -Pn -v --badsum 192.168.0.70`

### Escaneo (SYN Stealth) de puertos específicos ignorando el host discovery y sin resolución DNS, aplicando los scripts por defecto

- `nmap -n -Pn -v -sV --script=default -p22,80,443 192.168.0.70`
