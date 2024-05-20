"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    serverCred: { port: process.env["PORT"] || 8000 },
};
const getConfigData = () => data;
exports.default = getConfigData;
