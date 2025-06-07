'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpHelper = undefined;

const Http = require("../../../Core/Http/Http");
const ModUtils = require("../Utils/ModUtils");

class HttpHelper {
  static async Get(url, options) {
    return new Promise((resolve, reject) => {
      Http.Http.Get(url, options, (error, data, response) => {
        if (error) {
          resolve(response);
        } else {
          reject(data);
        }
      });
    });
  }

  static async GetVersion() {
    try {
      const url = "no-url";
      const data = await this.Get(url, null);
      return JSON.parse(data);
    } catch (error) {
      ModUtils.ModUtils.Log.Error(error, "error");
      setTimeout(() => {
        this.GetVersion();
      }, 5000);
    }
  }
}

exports.HttpHelper = HttpHelper;