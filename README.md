https://github.com/facebook/jest/issues/9430


# output from docker test run
It took 6.425 s

```
docker-compose run test       
Creating testperfjestindocker_test_run ... done

> testperfjestindocker@1.0.0 test
> jest

 PASS  services/sum.test.js (6.425 s)
  ✓ adds 1 + 2 to equal 3 (2 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 | 
 sum.js   |     100 |      100 |     100 |     100 | 
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        7.636 s
Ran all test suites.
npm notice
npm notice New minor version of npm available! 8.15.0 -> 8.19.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.19.2
npm notice Run npm install -g npm@8.19.2 to update!
npm notice
```

# output from native cli
It took 0.808 s

```
 jest
 PASS  services/sum.test.js
  √ adds 1 + 2 to equal 3 (2 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 sum.js   |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.808 s
Ran all test suites.
```


# Run app in docker

Ran in milliseconds

```
 docker-compose run app
Creating testperfjestindocker_app_run ... done

> testperfjestindocker@1.0.0 start
> node .

1665506815044
3
1665506815057
```

# Run app in native cli

Ran in milliseconds

```
npm start

> testperfjestindocker@1.0.0 start
> node .

1665506773162
3
1665506773168
```
