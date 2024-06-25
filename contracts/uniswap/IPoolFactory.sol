interface IPoolFactory {
    function getPool(address, address, uint24) external view returns (address);
}