/**
 * DEFAULT MARKID BASE DOMAIN
 */
const DefaultMarkIdDomain = 'https://markid.eu';

/**
 * MARKID API WIDGET IDENTIFICATION INITIATION ENDPOINT
 * THIS ENDPOINT HAS TO BE CALLED BEFORE ANY OTHER
 */
export const HostUrl = `${DefaultMarkIdDomain}/api/identity/init`;

/**
 * MARKID API WIDGET STEPS ENDPOINT
 * USE THIS ENDPOINT FOR POSTING DATA
 */
export const StepsUrl = `${DefaultMarkIdDomain}/api/identity/step_action`;

/**
 * MARKID API WIDGET IDENTIFICATION STATUS ENDPOINT
 * USE THIS ENDPOINT TO NOTIFY MARKID AGENTS OF NEWLY COMPLETED IDENTIFICATION
 */
export const NotifyAgentUrl = `${DefaultMarkIdDomain}/api/finish`;

/**
 * MARKID API WIDGET IDENTIFICATION REPORT ENDPOINT
 * USE THIS ENDPOINT TO GET IDENTIFICATION RESULTS
 */
export const IdentificationReportUrl = `${DefaultMarkIdDomain}/api/report`;

/**
 * PLEASE PROVIDE YOUR IDENTIFICATION DATA HERE
 * 
 * TO VIEW REQUIRED PARAMETERS, PLEASE REFER TO https://markid.eu/api/doc
 * IF YOU DO NOT HAVE TOKEN, YOU CAN OBTAIN ONE HERE: https://markid.eu/token
 * 
 * IF YOU WISH TO ADD ADDITIONAL PARAMETERS TO THE WIDGET, YOU MAY DO SO INSIDE 'params'
 * IN THAT CASE, MAKE SURE TO ADD DESIRED PARAMETERS TO THE MarkIdInitializationUrl
 */
const MarkIdWidget = {
    'token': 'f4b79b72-7587-f417-41f8-2de5a7c87fae',
    'name': 'Dmitriy',
    'surname': 'Yanov-Yanovskiy',
    'personcode': '38606032125',
    'birthday': '1986-06-03',
    'mode': 'min',
    'auto': 'true'
}

/**
 * IF YOU HAVE ADDED ADDITIONAL PARAMETERS TO THE WIDGET ABOVE,
 * MAKE SURE TO ACCORDINGLY MODIFY THIS URL BELOW
 */
export const MarkIdInitializationUrl = 
    HostUrl +
    "?token=" + MarkIdWidget.token +
    "&name=" + MarkIdWidget.name +
    "&surname=" + MarkIdWidget.surname +
    "&personcode=" + MarkIdWidget.personcode +
    "&birthday=" + MarkIdWidget.birthday +
    "&mode=" + MarkIdWidget.mode +
    "&auto=" + MarkIdWidget.auto +
    "&source=api_widget";
