import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Col, ColSchema} from "./schemas";
import {ColService} from "./services";
import {ColController} from "./controllers";

@Module({
    imports: [
        MongooseModule.forRoot("mongodb://localhost/test"),
        MongooseModule.forFeature([{name: Col.name, schema: ColSchema}])
    ],
    controllers: [AppController, ColController],
    providers: [AppService, ColService],
})
export class AppModule {
}
