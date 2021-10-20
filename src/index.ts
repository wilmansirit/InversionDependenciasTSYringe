import 'reflect-metadata';
import { container } from 'tsyringe';
import { Main } from "./api/main";

const api = container.resolve(Main);