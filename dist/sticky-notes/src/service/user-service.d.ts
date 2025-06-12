export declare class UserService {
    private userDataSource;
    currentUserData: import("rxjs").Observable<{
        email: string;
        password: string;
    }>;
    constructor();
    changeData(newUserData: any): void;
}
