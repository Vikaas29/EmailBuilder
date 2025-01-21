import { checkserverstatus } from "../controllers/checkServer.js";
import { addEmailConfig, recentdata, render } from "../controllers/emailDataController.js";
import { getEmailLayout } from "../controllers/getEmailLayout.js";

export function originalRoutes(app){
    app.get("/getemaillayout/:id",getEmailLayout);

    app.post("/uploademailconfig",addEmailConfig);

    app.get("/renderanddownloadtemplate/:emailId/:temp",render);

    app.get("/recentdata/:emailId/:temp",recentdata);

    app.get("/checkserverstatus", checkserverstatus)
}