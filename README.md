build
```bash
docker build . -t ctnelson1997/cs571-f23-weekly-api
docker push ctnelson1997/cs571-f23-weekly-api
```

run
```bash
docker pull ctnelson1997/cs571-f23-weekly-api
docker run --name=cs571_f23_weekly_api -d --restart=always -p 39999:39999 -v /cs571/f23/weekly:/cs571 ctnelson1997/cs571-f23-weekly-api
```
