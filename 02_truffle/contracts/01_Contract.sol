pragma solidity ^0.8.7;

contract TestContract{
    string public name;

    constructor(){
        name = 'codestates';
    }

    function set(string memory x) public{
        name = x;
    }

    function get() public view returns(string memory){
        return name;
    }
}