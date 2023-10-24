

<nav>
    <ul>
        <li>하이</li>
        <li>하이</li>
        <li>하이</li>
        <div>로고</div>
        <li>하이</li>
        <li>하이</li>
        <li>하이</li>
    </ul>
</nav>

<style>
    nav {
        height: 10vh;
        border: 1px solid red;
        width: min(100%, 1280px);
        margin-inline: auto;
    }

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }
    
    
    li {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        flex: 1 1 auto;
        line-height: 200%

    }
    
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(6),
    li:nth-child(7) {
        border-left: 1px solid #ccc;
        
    }



</style>
