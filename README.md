<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Steps
  --1. nest generate library common
  --2. npm i @nestjs/mongoose mongoose
  --3. npm i @nestjs/config
  --4. nest generate module database -p common
  --5. delete common module, common service and common service.spec files
  --6. nest generate module config -p common
  --7. import in donfig module imports: [NestConfigModule.forRoot()],
  --8. provide the database connection 
  --9. npm i joi
  -- 10. setup the database connection validation using joi in config_module.ts file
  -- 11. write crud function into abstractRepository file
  -- 12. Generate reservation app. command nest g app reservation
  -- 13. remove 'sleepr-microservices' json object from 'nest-cli.json' file
      "sleepr-microservices": {
        "type": "application",
        "root": "apps/sleepr-microservices",
        "entryFile": "main",
        "sourceRoot": "apps/sleepr-microservices/src",
        "compilerOptions": {
          "tsConfigPath": "apps/sleepr-microservices/tsconfig.app.json"
        }
    },
    and change "root": "apps/sleepr-microservices" to "root": "apps/reservation", making default app. 'sleepr-microservices' is project named 'sleepr-microservices' json object
    change "compilerOptions": {
      "deleteOutDir": true,
      "webpack": true,
      "tsConfigPath": "apps/sleepr-microservices/tsconfig.app.json"
    }
    to 
    "compilerOptions": {
      "deleteOutDir": true,
      "webpack": true,
      "tsConfigPath": "apps/reservation/tsconfig.app.json"
    }
    change 
    "$schema": "https://json.schemastore.org/nest-cli",
    "collection": "@nestjs/schematics",
    "sourceRoot": "apps/sleepr-microservices/src",
    "compilerOptions": {
      "deleteOutDir": true,
      "webpack": true,
      "tsConfigPath": "apps/reservation/tsconfig.app.json"
    }
  to 
  "$schema": "https://json.schemastore.org/nest-cli",
    "collection": "@nestjs/schematics",
    "sourceRoot": "apps/reservation/src",
    "compilerOptions": {
      "deleteOutDir": true,
      "webpack": true,
      "tsConfigPath": "apps/reservation/tsconfig.app.json"
    }
--14. delete project("sleepr-microservices") named directory under apps directory
--15. nest g resource reservation
-- 16. npm i class-validator class-transformer
-- 17. npm i nestjs-pino pino-http for log
-- 18. npm i pino-pretty
-- 19. nest g module logger for common use in every microservices
-- 20. create 'Dockerfile' file under apps/reservation/' directory and write the code
-- 21. create '.dockerignore' file under root level and write the code
-- 22. goto '$: cd apps/reservation/'
-- 23. run the '$: docker build ../../ -f Dockerfile -t sleepr_reservations' command
-- 24. after step 23 run command '$: docker run sleepr_reservations'