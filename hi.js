class ApiResponse{
    constructor(statusCode,data,message="Success",success){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=this.success
     }}
     
     const api=new ApiResponse(33,5,"hi",78)
     console.log(api)