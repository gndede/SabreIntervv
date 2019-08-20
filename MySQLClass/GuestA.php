<?php

//Not sure why we would need this class. Both GuessAs and guest each has one method. 
//Both methods have different names, but does the same thing.

//using the PDO method
include_once 'DbClass.php';
class GuestAs
   {
 
    // database connection and table name
    private $conn;
    private $table_name = "guest";
 
    // guest object properties
    public $id;
    public $guest_name;
    public $guest_address;
    public $guest_phone;
    public $guest_email;
    public $timestamp;
 
    public function __construct($db){
        $this->conn = $db;
    }
 
    // create guest method
    function addGuests() 
    {
        //write the query into the table
        $query = "INSERT INTO
                    " . $this->table_name . "
                SET
                    guest_name=:guest_name, guest_address=:guest_address, guest_phone=:guest_phone, guest_email=:guest_email, created=:created";
 
        $sql = $this->conn->prepare($query);
 
        // posted guest fields and values - sanitization is a good thing always
        $this->guest_name=htmlspecialchars(strip_tags($this->guest_name));
        $this->guest_address=htmlspecialchars(strip_tags($this->guest_address));
        $this->guest_phone=htmlspecialchars(strip_tags($this->guest_phone));
        $this->guest_email=htmlspecialchars(strip_tags($this->guest_email));
 
        // We obtain the time-stamp for respective 'created' field
        $this->timestamp = date('Y-m-d H:i:s');
 
        // bind values to the fiesld
        $sql->bindParam(":guest_name", $this->guest_name);
        $sql->bindParam(":guest_address", $this->guest_address);
        $sql->bindParam(":guest_phone", $this->guest_phone);
        $sql->bindParam(":guest_email", $this->guest_email);
        $sql->bindParam(":created", $this->timestamp);
 
        if($sql->execute())
        {
            return true;
        }   else  {
        
            return false;
        }
 
    }
}
?>