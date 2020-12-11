export default class UserService{
    url = "http://jsonplaceholder.typicode.com/users";
    async users(){
        return await fetch(this.url).then(value => value.json())
    }
}