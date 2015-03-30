<?php
	/**
	* 
	*/
	class Person
	{
		public $name;
		public $age;
		
		function __construct($name,$age)
		{
			$this->name = $name;
			$this->age = $age;
		}
	}

	$per1 = new Person('người 1', 30);
	echo json_encode($per1);
?>