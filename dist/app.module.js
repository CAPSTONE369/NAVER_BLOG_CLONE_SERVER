"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const post_entity_1 = require("./posts/entities/post.entity");
const posts_controller_1 = require("./posts/posts.controller");
const posts_module_1 = require("./posts/posts.module");
const posts_service_1 = require("./posts/posts.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            posts_module_1.PostsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: process.env.DATABASE_HOST,
                port: 3306,
                username: "snorlax",
                password: "1234",
                database: "naverblog",
                entities: [post_entity_1.PostEntity],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([common_1.Post]),
        ],
        controllers: [app_controller_1.AppController, posts_controller_1.PostsController],
        providers: [app_service_1.AppService, posts_service_1.PostsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map