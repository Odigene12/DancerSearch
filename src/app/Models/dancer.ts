export class Dancer {
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    country: string;
    primaryDanceStyle: string;

    clearDancerObject() {
        this.firstName = '';
        this.lastName = '';
        this.city = '';
        this.state = '';
        this.country = '';
        this.primaryDanceStyle = '';
    }

    isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] !== '') {
                return false;
            }
        }
        return true;
    }
}
