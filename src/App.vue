<script setup>
    import GithubButton from "vue-github-button";
</script>

<template>
    <head>
        <title>nashiusagi</title>
    </head>
    <body>
        <h1><a href="https://nashiusagi.github.io">nashiusagi.github.io</a></h1>
        <div>Hello there! I'm NashiUsagi!</div>
        <a
            href="https://twitter.com/NashiUsaBoy?ref_src=twsrc%5Etfw"
            class="twi-btn btn"
            style="display: inline-block"
            target="_blank"
        >
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
            Follow @NashiUsaBoy
        </a>
        <github-button
            href="https://github.com/nashiusagi"
            data-size="large"
            aria-label="Follow @nashiusagi on GitHub"
            >Follow @nashiusagi
        </github-button>
        <br />
        <div>
            Handle: 梨兎 / nashiusagi / nashiusaboy

            <br />
            Real Name: Ryogo Ito<br />
            Old Account: @Ryogo-san<br />
        </div>

        <h2>Education</h2>
        <ul>
            <li>
                2023 - : Adways.inc
            </li>
            <li>
                2021 - 2023: Tokyo Institute of Technology, Dept. of Computer
                Science.<br />
                Master of Engineering, Artificial Intelligence.<br />
                Saito Laboratory.
            </li>
            <li>
                2017 - 2021 : Waseda University, School of Fundamental Science
                and Engineering<br />
                Bachelor of Engineering, Computer Science and Engineering.<br />
                Ishikawa Laboratory.
            </li>
            <li>2013 - 2016 : Zushi Kaisei Senior High School</li>
        </ul>
        <h2>Programming Skills</h2>
        <h3>【★★★】 Love</h3>
        <ul>
            <li>Python (LA)</li>
            <li>Ubuntu (OS)</li>
        </ul>
        <h3>【★★☆】 Daily</h3>
        <ul>
            <li>Java (LA)</li>
            <li>PHP (LA)</li>
            <li>JavaScript (LA)</li>
            <li>PyTorch (FW)</li>
            <li>Tensorflow (FW)</li>
            <li>Laravel (FW)</li>
            <li>React (FW)</li>
            <li>Vue3 (FW)</li>
            <li>GNU/Linux Debian (OS)</li>
            <li>Windows (OS)</li>
        </ul>
        <h3>【★☆☆】Sometimes</h3>
        <ul>
            <li>C/C++ (LA)</li>
            <li>Shell Script (LA)</li>
        </ul>
        <h3>【☆☆☆】Studying</h3>
        <ul>
            <li>TypeScript (LA)</li>
            <li>Vim Script (LA)</li>
            <li>Rust (LA)</li>
            <li>Ruby (LA)</li>
            <li>actix-web (FW)</li>
        </ul>
        <h2>Commitments</h2>
        <h4>International Conference (Reviewed)</h4>
        <ul>
            <li>
                Ryogo Ito, Mitsuhiro Uchida, and Suguru Saito. Decision of Line
                Structure beyond Junctions Using U-Net-Based CNN for Line
                Drawing Rendering. SIGGRAPH Asia 2021 Posters. 2021.
            </li>
        </ul>
        <h4>Domestic Conference (Reviewed)</h4>
        <ul>
            <li>
                伊藤 諒悟, 齋藤 豪, 森合 遼.
                疑似相対深度推定によるイラストへの重なりを考慮した差し込み.
                VC+VCC2022, 2022.
            </li>
        </ul>
        <h4>Domestic Conference (UnReviewed)</h4>
        <ul>
            <li>
                伊藤 諒悟, 齋藤 豪, 内田 光洋.
                U-NetベースのCNNを用いた結節点における線分接続判定. VC+VCC2021,
                2021.
            </li>
            <li>
                伊藤 諒悟, 齋藤 豪, 森合 遼.
                線画像における相対深度グラフ作成手法とそれを用いた線画像の差し込み編集法.
                CGVI第189回研究発表会, 2023.
            </li>
            <li>
                伊藤 諒悟, 齋藤 豪, 森合 遼.
                相対的深度情報グラフを用いた線画像の差し込み編集法.
                情報処理学会第85回全国大会, 2023.
            </li>
        </ul>
        <h4>Journal</h4>
        <ul>
        <li>TBD</li>
            <!--<li>
                Dingkun Yan, Ryogo Ito, Ryo Moriai, and Suguru Saito.
                Two-step Training: Adjustable Sketch Colorization via Reference Image and Text Tag. Computer Graphics Forum.
                TBD.
            </li>
            -->
        </ul>
    </body>
    <footer></footer>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }

    .twi-btn {
        color: #fff;
        background: #55acee;
    }

    .twi-btn:hover {
        color: #fff;
        background: #55aceea9;
    }

    .btn,
    a.btn {
        font-size: 12px;
        font-weight: 700;
        line-height: 1;
        position: relative;
        display: inline-block;
        margin-bottom: 18px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;
        letter-spacing: 0.1em;
        border-radius: 3px;
    }
</style>
