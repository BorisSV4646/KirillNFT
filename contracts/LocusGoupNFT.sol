// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract LocusGoupNFT is ERC721 {
    Counters.Counter private _nextTokenId;
    using Counters for Counters.Counter;

    uint256 constant MAXSUPLAY = 80;
    string public _name = "LocusGoup";
    string public _symbol = "LG";
    bool public saleIsActive = true;
    address private _owner;

    constructor() ERC721(_name, _symbol) {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Not an owner");
        _;
    }

    receive() external payable {}

    function startMint(address _to) public payable onlyOwner {
        uint256 currentTokenId = _nextTokenId.current() + 1;
        _nextTokenId.increment();
        address to = _to;
        super._safeMint(to, currentTokenId, "");
    }

    function _mint(address to, uint256 tokenId) internal override {
        require(saleIsActive, "Sale must be active to mint");
        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");
        require(MAXSUPLAY >= tokenId, "Too mach tokkens");

        _beforeTokenTransfer(address(0), to, tokenId, 1);

        require(!_exists(tokenId), "ERC721: token already minted");

        unchecked {
            _balances[to] += 1;
        }

        _owners[tokenId] = to;

        emit Transfer(address(0), to, tokenId);

        _afterTokenTransfer(address(0), to, tokenId, 1);
    }

    function flipSaleState() public onlyOwner {
        saleIsActive = !saleIsActive;
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }
}
