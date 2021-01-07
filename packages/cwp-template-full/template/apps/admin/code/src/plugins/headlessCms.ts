import headlessCmsPlugins from "@webiny/app-headless-cms/admin/plugins";
import textField from "@webiny/app-headless-cms/admin/plugins/fields/text";
import longTextField from "@webiny/app-headless-cms/admin/plugins/fields/longText";
import richTextField from "@webiny/app-headless-cms/admin/plugins/fields/richText";
import numberField from "@webiny/app-headless-cms/admin/plugins/fields/number";
import booleanField from "@webiny/app-headless-cms/admin/plugins/fields/boolean";
import dateTimeField from "@webiny/app-headless-cms/admin/plugins/fields/dateTime";
import fileField from "@webiny/app-headless-cms/admin/plugins/fields/file";
import refField from "@webiny/app-headless-cms/admin/plugins/fields/ref";

import numberFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/number";
import textFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/text";
import longTextFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/longText";
import richTextFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/richText";
import booleanFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/boolean";
import dateTimeFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/dateTime";
import fileFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/file";
import radioButtonsFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/radioButtons";
import selectFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/select";
import checkboxesFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/checkboxes";
import refFieldRenderer from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/ref";

import gteFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/gte";
import inValidatorFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/in";
import lteFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/lte";
import requiredFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/required";
import minLengthFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/minLength";
import maxLengthFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/maxLength";
import patternFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/pattern";
import emailFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/patternPlugins/email";
import urlFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/patternPlugins/url";
import lowerCaseFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/patternPlugins/lowerCase";
import upperCaseFieldValidator from "@webiny/app-headless-cms/admin/plugins/validators/patternPlugins/upperCase";

import welcomeScreenWidget from "@webiny/app-headless-cms/admin/plugins/welcomeScreenWidget";

import richTextEditor from "./headlessCMS/richTextEditor";

export default [
    headlessCmsPlugins(),
    richTextEditor,
    textField,
    longTextField,
    richTextField,
    numberField,
    booleanField,
    dateTimeField,
    fileField,
    refField,
    numberFieldRenderer,
    textFieldRenderer,
    longTextFieldRenderer,
    richTextFieldRenderer,
    booleanFieldRenderer,
    dateTimeFieldRenderer,
    fileFieldRenderer,
    radioButtonsFieldRenderer,
    selectFieldRenderer,
    checkboxesFieldRenderer,
    refFieldRenderer,
    gteFieldValidator,
    inValidatorFieldValidator,
    lteFieldValidator,
    requiredFieldValidator,
    minLengthFieldValidator,
    maxLengthFieldValidator,
    patternFieldValidator,
    emailFieldValidator,
    urlFieldValidator,
    lowerCaseFieldValidator,
    upperCaseFieldValidator,
    welcomeScreenWidget
];