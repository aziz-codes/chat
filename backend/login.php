<?php 
include_once "connection.php";
  
$username = mysqli_real_escape_string($con,$_POST['email']);
$password = mysqli_real_escape_string($con,$_POST['password']);

if(!empty($username) && !empty($password)){
    
    $data = mysqli_query($con,"SELECT * FROM `user` WHERE (username='$username' or email='$username') and password = '$password'");

    if(mysqli_num_rows($data)>0)
{

// header("Location: Admin/dashboard.php");
//   $_SESSION['admin']=$email;
echo "OK G";
}
   else{
    echo "No data exists";
   }

}
else{
    echo "All fields are required";
}



?>