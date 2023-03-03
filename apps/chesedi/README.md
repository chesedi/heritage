# FND 관리자 사이트

## Setup
```bash
yarn install
yarn dev
```

### SSL 인증서 생성 (optional)

로컬서버가 https 환경에서의 동작하도록 개인용 인증서를 생성한다.

```bash
openssl req -x509 -newkey rsa:2048 -nodes -keyout ssl-key.pem -out ssl-cert.pem -days 365

# 3개 항목 필수 입력
# Country Name (2 letter code) []:kr
# State or Province Name (full name) []:seoul
# Locality Name (eg, city) []:seoul
# (WindowsOS 에서는 http://slproweb.com/products/Win32OpenSSL.html 에서 바이너리
# 설치 후 실행)
```

### 로컬서버 호스트 추가 (optional)

로컬에서 CORS 정책에 맞추고자 호스트를 추가한다.

```bash
$ sudo vi /etc/hosts

# and add below line
127.0.0.1   localhost
127.0.0.1   local.chesedi.com
```