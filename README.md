# What
Тестовая площадка для интеграция бека с фронтом через docker compose.

## Installing

1. Install docker desktop.
2. Run all together
```docker compose up```
3. Run separately:
- 3.1. BFF: ```cd ../bff && npm run docker:build && npm run docker:run```
- 3.2. Front: ```cd ../front && npm run docker:build && npm run docker:run```
4. Go to http://localhost (front)
5. Test BFF: ```curl -v localhost:3000/products```



