<?php
class DbClass{
  
    // specify the database credentials
    private $servername = "localhost";
    private $username = "username";
    private $password = "password";
    private $db_name =  "myDB";
    public $conn;
  
    // get the database connection going
    public function getConnection(){
  
        $this->conn = null;
  
        try{
            $this->conn = new PDO("mysql:servername=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        
        }   catch(PDOException $exception){
            
            echo "Connection error - No Connection to the DB: " . $exception->getMessage();
        }
  
        return $this->conn;
    }
}
?>