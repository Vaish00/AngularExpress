import {environment} from 'src/environments/environment';

export class ApiUrlConstant{
    private static appurl = environment.apiUrl;
    public static get BULK_UPLOAD(): string { return this.appurl + '/bulkupload' }
    public static get LIST_SPARE(): string { return this.appurl + '/listSpare' }


}