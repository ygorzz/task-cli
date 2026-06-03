export default function handleErrors(error){
  if(error.code === "ENOENT"){
    console.error("The task's file doesn't exists.");
  }else{
    console.error(error);
  }
}