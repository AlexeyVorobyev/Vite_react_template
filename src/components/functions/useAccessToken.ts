import {MutationTrigger} from "@reduxjs/toolkit/dist/query/react/buildHooks";

const useAccessTokenMutation = (request: MutationTrigger<any>) => {
    return (data:any) => {
        const response = request(data)
        response.then((response) => {
            console.log(response)
        })
    }
}