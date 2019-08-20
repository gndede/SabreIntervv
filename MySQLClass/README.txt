README

Instead of using the MySQL, for connection, it is a deprecated function and will never work for the latest PHP and MySQL.

Instead I opted to use PDO for connection and used PREPARED statement for security and to help avoid any form of SQL injection.

PDO is cleaner and also supports OOP.