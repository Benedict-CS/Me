var NexT = window.NexT || {},
    CONFIG = {
        root: "/",
        scheme: "Mist",
        sidebar: {
            position: "left",
            display: "post",
            offset: 12,
            onmobile: !1,
            dimmer: !1
        },
        back2top: !0,
        back2top_sidebar: !1,
        fancybox: !1,
        fastclick: !1,
        lazyload: !1,
        tabs: !0,
        motion: {
            enable: !0,
            async: !1,
            transition: {
                post_block: "fadeIn",
                post_header: "slideDownIn",
                post_body: "slideDownIn",
                coll_header: "slideLeftIn",
                sidebar: "slideUpIn"
            }
        },
        algolia: {
            applicationID: "",
            apiKey: "",
            indexName: "",
            hits: {
                per_page: 10
            },
            labels: {
                input_placeholder: "Search for Posts",
                hits_empty: "We didn't find any results for the search: ${query}",
                hits_stats: "${hits} results found in ${time} ms"
            }
        }
    }