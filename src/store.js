import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            user: false,
            apiData : [],
            details : null,
        }
    },
    mutations : {
        getData(state){
                fetch('https://api.spacexdata.com/v3/launches')
                .then(response => response.json())
                .then(data=>{
                    state.apiData = data;
                })
                .catch(error=>{
                    console.log("Error fetching data", error)
                });
            },
        launchDetail(state, payload){
                state.details = state.apiData[payload-1]
                console.log(state.details.mission_name)
            },
        registerUser(state, payload){
            fetch("https://vue-project-8c226-default-rtdb.firebaseio.com/space.json", {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    username : payload.username,
                    email : payload.email,
                    password : payload.password
                })
            })
        },
        signInUser(state, payload){
            fetch("https://vue-project-8c226-default-rtdb.firebaseio.com/space.json").then(function(response){
                if (response.ok){
                    return response.json();
                }
            }).then(function(data){
                console.log(data)
                for(const i in data){
                    if (data[i].username===payload.username && data[i].password===payload.password){
                        console.log('user logged in')
                        state.user = true
                    }
                }
            })
        },
        // userState(state, payload){
        //     state.user = payload
        // }
        },
        actions : {
            fetchedData(context){
                context.commit('getData')
            },
            getDetail(context, payload){
                context.commit('launchDetail', payload)
            },
            signupUser(context, payload){
                context.commit('registerUser', payload)
            },
            loginUser(context, payload){
                context.commit('signInUser', payload)
            },
            // changeAuth(context, payload){
            //     context.commit('userState', payload)
            // }
        },
        getters : {
            jsonDatas(state){
                console.log(state.apiData)
                return state.apiData
            },
            details(state){
                return state.details
            },
            user(state){
                return state.user
            }
        }
    }
)

export default store