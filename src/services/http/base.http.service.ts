import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class BaseHttpService {
    constructor(protected readonly http: Http) {
        this.options = new RequestOptions({ withCredentials: true });
    }

    private readonly host: string = 'http://localhost:5000';
    private readonly options: RequestOptions;

    protected httpPost<RT>(endpoint: string, body: any): Promise<RT> {
        return this.http.post(`${this.host}/${endpoint}`, body, this.options)
            .map(response => this.getJson<RT>(response))
            .toPromise<RT>();
    }

    protected httpGet<RT>(endpoint: string): Promise<RT> {
        return this.http.get(`${this.host}/${endpoint}`, this.options)
            .map(response => this.getJson<RT>(response))
            .toPromise<RT>();
    }

    protected httpPut<RT>(endpoint: string, body: any): Promise<RT> {
        return this.http.put(`${this.host}/${endpoint}`, body, this.options)
        .map(response => this.getJson<RT>(response))
        .toPromise<RT>();
    }

    protected httpDelete<RT>(endpoint: string): Promise<RT> {
        return this.http.delete(`${this.host}/${endpoint}`, this.options).map(response => this.getJson<RT>(response)).toPromise<RT>()
    }
    

    protected getJson<BodyType>(response: Response): BodyType {
        if (!response || !response.text()) return null;

        let body: BodyType;
        try {
            body = response.json() as BodyType;
        } catch(error) {
            body = null;
        }

        return body;
    }
}