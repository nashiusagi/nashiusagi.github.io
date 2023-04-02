<script setup>
    import GithubButton from "vue-github-button";
    import TwitterButton from "@/components/TwitterButton.vue";
</script>

<template>
    <head>
        <title>nashiusagi</title>
    </head>
    <body
        class="pl-8 py-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-max"
    >
        <h1 class="text-4xl font-bold mb-6">
            <a href="https://nashiusagi.github.io">nashiusagi.github.io</a>
        </h1>
        <div class="my-2">Hello there! I'm NashiUsagi!</div>
        <div class="text-gray-900 subpixel-antialiased">
            <div class="bg-[#ffffff]/[0.2] w-4/5 p-1 backdrop-blur rounded-md">
                Social Medias <br />

                <TwitterButton
                    username="NashiUsaBoy"
                    link="https://twitter.com/NashiUsaBoy?ref_src=twsrc%5Etfw"
                />
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
            </div>

            <div
                id="history"
                class="my-4 bg-[#ffffff]/[0.2] w-4/5 p-1 backdrop-blur rounded-md"
            >
                <h2 class="text-2xl font-bold">History</h2>
                <ul class="list-disc ml-8">
                    <li>2023 - : Adways.inc</li>
                    <li>
                        2021 - 2023: Tokyo Institute of Technology, Dept. of
                        Computer Science.<br />
                        Master of Engineering, Artificial Intelligence.<br />
                        Saito Laboratory.
                    </li>
                    <li>
                        2017 - 2021 : Waseda University, School of Fundamental
                        Science and Engineering<br />
                        Bachelor of Engineering, Computer Science and
                        Engineering.<br />
                        Ishikawa Laboratory.
                    </li>
                    <li>2013 - 2016 : Zushi Kaisei Senior High School</li>
                </ul>
            </div>
            <div
                id="skill"
                class="my-4 bg-[#ffffff]/[0.2] w-4/5 p-1 backdrop-blur rounded-md"
            >
                <h2 class="text-2xl font-bold">Programming Skills</h2>
                <h3 class="text-xl font-bold">【★★★】 Love</h3>
                <ul class="list-disc ml-12">
                    <li>Python (LA)</li>
                    <li>Ubuntu (OS)</li>
                </ul>
                <h3 class="text-xl font-bold">【★★☆】 Daily</h3>
                <ul class="list-disc ml-12">
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
                <h3 class="text-xl font-bold">【★☆☆】Sometimes</h3>
                <ul class="list-disc ml-12">
                    <li>C/C++ (LA)</li>
                    <li>Shell Script (LA)</li>
                </ul>
                <h3 class="text-xl font-bold">【☆☆☆】Studying</h3>
                <ul class="list-disc ml-12">
                    <li>TypeScript (LA)</li>
                    <li>Vim Script (LA)</li>
                    <li>Rust (LA)</li>
                    <li>Ruby (LA)</li>
                    <li>actix-web (FW)</li>
                </ul>
            </div>
            <div
                id="commitments"
                class="my-4 bg-[#ffffff]/[0.2] w-4/5 p-1 backdrop-blur rounded-md"
            >
                <h2 class="text-2xl font-bold">Commitments</h2>
                <div class="ml-4">
                    <h3 class="text-xl font-bold">
                        International Conference (Reviewed)
                    </h3>
                    <ul class="list-disc ml-8">
                        <li>TypeScript (LA)</li>
                        <li>
                            Ryogo Ito, Mitsuhiro Uchida, and Suguru Saito.
                            Decision of Line Structure beyond Junctions Using
                            U-Net-Based CNN for Line Drawing Rendering. SIGGRAPH
                            Asia 2021 Posters. 2021.
                        </li>
                    </ul>
                    <h3 class="text-xl font-bold">
                        Domestic Conference (Reviewed)
                    </h3>
                    <ul class="list-disc ml-8">
                        <li>
                            伊藤 諒悟, 齋藤 豪, 森合 遼.
                            疑似相対深度推定によるイラストへの重なりを考慮した差し込み.
                            VC+VCC2022, 2022.
                        </li>
                    </ul>
                    <h3 class="text-xl font-bold">
                        Domestic Conference (UnReviewed)
                    </h3>
                    <ul class="list-disc ml-8">
                        <li>
                            伊藤 諒悟, 齋藤 豪, 内田 光洋.
                            U-NetベースのCNNを用いた結節点における線分接続判定.
                            VC+VCC2021, 2021.
                        </li>
                        <li>
                            伊藤 諒悟, 齋藤 豪, 森合 遼.
                            線画像における相対深度グラフ作成手法とそれを用いた線画像の差し込み編集法.
                            CGVI第189回研究発表会, 2023.
                        </li>
                        <li>
                            伊藤 諒悟, 齋藤 豪, 森合 遼.
                            相対的深度情報グラフを用いた線画像の差し込み編集法.
                            情報処理学会第85回全国大会, 2023. （学生奨励賞受賞）
                        </li>
                    </ul>
                    <h3 class="text-xl font-bold">Journal Paper</h3>
                    <ul class="list-disc ml-8">
                        <li>TBD</li>
                        <!--<li>
                Dingkun Yan, Ryogo Ito, Ryo Moriai, and Suguru Saito.
                Two-step Training: Adjustable Sketch Colorization via Reference Image and Text Tag. Computer Graphics Forum.  TBD.  </li>
            -->
                    </ul>
                </div>
            </div>
        </div>
    </body>
    <footer></footer>
</template>
