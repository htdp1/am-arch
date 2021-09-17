(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{521:function(t,a,s){"use strict";s.r(a);var r=s(40),l=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"multi-cluster-구축"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-cluster-구축"}},[t._v("#")]),t._v(" Multi Cluster 구축")]),t._v(" "),s("ul",[s("li",[t._v("구축 목표\n"),s("ul",[s("li",[t._v("Control Plane 과 Data Planes 으로 구성한다.")]),t._v(" "),s("li",[t._v("Cluster 에 설치되는 기본 컴포넌트의 설치를 자동화 한다.")]),t._v(" "),s("li",[t._v("Cluster EndPoint 관리를 자동화 한다.")]),t._v(" "),s("li",[t._v("DWP 에서 Cluster Resource 제어시 Task Runner 를 적용한다.")]),t._v(" "),s("li",[t._v("DWP 에서 Cluster Resource 제어시 async, non-block 을 적용한다.")]),t._v(" "),s("li",[t._v("DWP 에서 Cluster Resource 제어시 status monitoring 을 적용한다.")]),t._v(" "),s("li",[t._v("Access Log 를 Application 외부에서 처리하거나 최소한 Redis 직접 접속은 제거한다")])])])]),t._v(" "),s("h2",{attrs:{id:"deployment-diagram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment-diagram"}},[t._v("#")]),t._v(" Deployment Diagram")]),t._v(" "),s("h3",{attrs:{id:"site-a"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site-a"}},[t._v("#")]),t._v(" Site A")]),t._v(" "),s("ul",[s("li",[t._v("Site B 에서 사용하는 컴포넌트만 표시함")]),t._v(" "),s("li",[t._v("Docker registry 로 Harbor 를 사용함")]),t._v(" "),s("li",[t._v("Task 기반 비동기 처리를 위해 TaskAgent, TaskRunner, NotifyAgent 를 사용함")])]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/VPFBJi9058RtVOe9F00nSKLgWvQ5cd09a1XZN4od0rIcCyrqAbvWvqfDV04MkdVXWaGItmZX7PmRbqgqgtE-S_lFpBII2iX55XF78RY7QUW0-OqEWCy8us1aNE2cqHqkx-rxRW3He5niS4Xxs5iylSu_9uklwVBb_VlXUVauSqigmNDBgi3xg_mS4yA6tdpsiNYR_bSk1LbP3iT8oA44WuBFufXHqCRyEaAu060Aa4JWNe-xQBSRbugbAJF0pmAi2PA6HTMw8I6rHRLEqrJ58d76kN4d9RzgfaGeN4sfuviirHLKMGOUHIB8q00B7GXMdWcUHXngVYKDWuuX3nZNiAzDK6JwQAK2oa8vl4cWw78M0sbGisiV9LR4biWcum8I7K-qQLFqc3EpsZ3PeAfbeONZtmqxC1taZbWeiDLK9HpAkp6xgYXKtdg3N68henJpTIRNxcvgdOceUxlfIhM_stT7RGrIcHNc1CUMRMbkuJ0obyQLPNkD7QSYtvZy2tu0",alt:"uml diagram"}}),t._v(" "),s("h3",{attrs:{id:"site-b"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site-b"}},[t._v("#")]),t._v(" Site B")]),t._v(" "),s("ul",[s("li",[t._v("Control Plane, Data Plane 으로 구분")]),t._v(" "),s("li",[t._v("Platform Plane 과의 통신을 TaskRunner 를 이용")]),t._v(" "),s("li",[t._v("Docker registry 로 Harbor 사용")]),t._v(" "),s("li",[t._v("Gitee 는 사용자 git repository 로 사용됨")]),t._v(" "),s("li",[t._v("Platform 에서 배포에 사용되는 source 는 Bitbucket 을 사용함")]),t._v(" "),s("li",[t._v("Cluster 컴포넌트 관리를 위해 ArgoCD 를 사용함")]),t._v(" "),s("li",[t._v("Monitoring/Alert 컴포넌트는 long-terms 와 short-terms 를 구분함")])]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/VPEzJiCm4CVtF8K52moeGcAgIaGL4234Lyk22eEJ7AbLnuQp0mZAnWH8l003x0mCI23nHb3U0NyKqaAffpl_V-VxdsmlA4rH5paF0WuPY3GWPdNdIIIvHDBrAQafTWRLsRcm5jEaKvtSH2eo27lNz-ylTxstvy_Rnu_Bcy-hrrh50c6jOWl2_yftWNDv4hw_FlKUdiUL6qDzMu6GAP29I0gDafCjJWLC4Af8d1oISzS78T765ZVO3bKTqWGyPecdjDtmc5qj2pGA8G3tlsKi2fEIIUbcAz4wPZ9QT1WrOP8E8HU_MqUhbMXng7V2JCr0xmquBPGxJzYe59fIKDmkOd2YijcHoKfWXM8ilUEs2_-wNMOQV7rce_5UrwLWMY8JMQNE0RMpcqinw7Q9KwLPCjC4YabxJqnnAR8P3PYhQTS7F31W0Ua15NG4cdcbHDTOF9hiEA44jr3ceDjGg17muO_O7_CY61pI79H1EdGbUN_FpzbgGChyZQ2DJ7smO1wT-HPV",alt:"uml diagram"}}),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/VPBFIiD04CRlUOgblUYX1C5JYQ6jYe8K2vv4UvWaOx9airjsjmYnlNbImHVme7SF7WeMVAEQleERFngHrBdjVB_lszbXUqg3rDE4MHR347bW4LEpFR8lc91aLXw9esYAtPrTr_70ZxljKmayH3UxVrwzFsKVY_NZw-Vjm_fkwTWvu3fsRd0tsS-HCN7jhfPlsSlYFxiPg1hBuY90qZe03MJ4W6EBW29UC24tnIKIVMrcOeOPqBGKQLg9ULqCJB99wlJ7TUyOMVBTcF_D6GfEjP2KXtQVeTH5Q2Buxz131afJltE68Fteac-fI4ZTqIWJjJtE3LWIjUL8mXLmQ6B3KghP4-fjGED2gScH50dg2AUgYPxygBMZUDFGX8GecpoGwqcfroucOjf4vttI5iM_gDOvjwoUMRZvN5y0",alt:"uml diagram"}}),t._v(" "),s("h2",{attrs:{id:"cluster-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cluster-management"}},[t._v("#")]),t._v(" Cluster Management")]),t._v(" "),s("ul",[s("li",[t._v("Cluster 를 새로 구축하는 경우 절차를 기술함")]),t._v(" "),s("li",[t._v("Site Cluster 에 설치될 컴포넌트는 ArgoCD 로 관리함")]),t._v(" "),s("li",[t._v("배포 상태 관리는 ArgoCD Dashboard 를 사용함")])]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/dLJBReCm4BpxArRSKPK-fAg7AWcvz50fVr0jjaDSmBRi9Gf_toKXXOQqYSe1fDqPrZDZUnu90pLr9KIKM6cOYLWQwp5W3Mjk6MayMbgZKiOMy3HgBzr-A9CXPYTPrKJI0TxHOg5hRIaHOY79dKf1v6uFIJIaOG7PsrssIWJmuuTXi3IKDxBK9BHLm8GHQGdIMGgk0b-XrLDoiWY5orRf2kCsTnXK0XW1kIYLujg4SCHFokLp_EX7NLo6GiBVrj1nk_utKM13pZPrpjxCqjc1q1i2wUiW65wWC0I-YLjeEPKHxNvA6qGnJmQDl30VtAUMT0jK7iEw1HgqTwpRXVOMD7fV6Obad1qhUBYY8BPM7bHte567SSUCpZ5zzSn0kTMoT0rTW8qoFG51cStcJvZIldBj_mSUDigLQJsc7pNoxF6APxMpNIny27_yTM8jSJ8rVtNOwP16FfYftl5RY3dlKRu0lW00",alt:"uml diagram"}}),t._v(" "),s("h2",{attrs:{id:"sequence-diagram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sequence-diagram"}},[t._v("#")]),t._v(" Sequence Diagram")]),t._v(" "),s("ul",[s("li",[t._v("사용자 관점에서 필요한 프로세스를 Sequece Diagram 으로 작성")])]),t._v(" "),s("h3",{attrs:{id:"login-sso-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-sso-process"}},[t._v("#")]),t._v(" Login SSO process")]),t._v(" "),s("ul",[s("li",[t._v("프로세스 설명\n"),s("ul",[s("li",[t._v("Site A 사용자가 A url 과 B url 을 사용하여 로그인 할 경우\n"),s("ul",[s("li",[t._v("case1, case2")])])]),t._v(" "),s("li",[t._v("Site B 사용자가 B url 을 사용하여 로그인 할 경우\n"),s("ul",[s("li",[t._v("case3")])])])])])]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/hP8nRuCm48Lt_ugJzmmaofAXIfWh5IcgEbPtnasiWeryHitFxm6X49567Ue9lVVyxhFndXF6rDQLKcomif0f_dI-mOWr568vunhqgS2oTFu4svcTXyia9vTajtuE9-UXYC5OPgqKXGjeTid2GIkGXIQ5E4hmoZPgG0PyR-MpJpJJL3WUNmQNEInCVO0sLl1MN1k-ccKadqUeYrXVWb3Do7BzsrpwcJl7pYTi6h37JeLj2hwjoKR8LfaQJWMhfvuETb1rrwDya9RAVYHH3BBjWcBtCHaeglIShHSSJ2vuDSXJJRIbYzQaxd2plVsm7N1hkjk_eLdVqD0ZchMYQoFTfw6HXkxGq5zeDa933sYYEvr7dCs_uD02Poy_JTxzDm00",alt:"uml diagram"}}),t._v(" "),s("h3",{attrs:{id:"create-project-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-project-process"}},[t._v("#")]),t._v(" Create project process")]),t._v(" "),s("ul",[s("li",[t._v("고려사항")]),t._v(" "),s("li",[t._v("검토 필요 사항")])]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/XL8nJWCn4Ept5QkheBWYI3GKA0dGKA0J8g99u_WsaKbid-nr23LyWqVmhpo2DG7T9PU8gtopC-kTyGuZgy39hW2YLYl20SIbSOqAoc8b9QDDennNggwDM-1bfppscnPcmw8kgk1VI3Dktp-t7ry5WDBi0quY1PZv3HRHCE48IsnMYkS-s7nmL03ArxGNukrprSDk9kEx7lZWsSpVHWjotAizgRWyNNbCpibSXwLYR7YMz99uwiwYJq7JUO4gukxSuz-Re81SZM9G32VsBjaP1HoK0yZEiRpETl0ATI0b_fjTIf31SjfEAOoG7BByGmkAkfssIv5ipJhtwvY13bM4kv7xDvzWMLzBbcWfptz0oZR_Q_JBsM-pnn6xdGSJRip9kHy8QZfcgSlF-hm5Vq9BCQe5xSL-qOjzRUWLPTCvHO2Xw6JXlm40",alt:"uml diagram"}}),t._v(" "),s("h3",{attrs:{id:"create-application-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-application-process"}},[t._v("#")]),t._v(" Create application process")]),t._v(" "),s("ul",[s("li",[t._v("고려사항\n"),s("ul",[s("li",[t._v("site 정보와 상관없이 application 을 생성을 할 수 있도록 한다.")]),t._v(" "),s("li",[t._v("DWP metadata 생성 및 source repository 를 개발자에게 제공하는 범위로 한정한다.")])])]),t._v(" "),s("li",[t._v("검토 필요 사항\n"),s("ul",[s("li",[t._v("TaskRunner 에서 발생하는 status 를 NotifyAgent 로 보내는 기술 검증 필요")]),t._v(" "),s("li",[t._v("TaskRunner 에서 발생하는 status 를 조회하는 기능 검증 필요")])])])]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/XLEnJiCm4Dtz5QTCC0IfI2mCg2smeWfHiNHnawErajYMVIxj3B_1H_1V_GZE2L5IGY3J-RrtkRjtzjIJT1IgKWYVoH9X8doXj9LELh1WIcNAIaqBcUTAR-2gHy_DleD94MSdCsiluFZsSNp_J8IG6Ha7IuzEhCqU4gy8OGOfs5BIYt5L33Gc0lYpNJMuUruCiDlb_7u0FXXIBuVP1ZKDk2VfYt7cCMZDVVsaahcYTSWAf9K-yoQu3CyJa1wQ-6_zGLPbeuwHG9q3pyq-138wL6jqC4ad8Xe2wKsS4guXSoZP5idEYOYagwvpfbtGG7mM7SYftGHz2VkjTl5dlG55Jyg9pHYnx1QpmWHg4S8gRWL7zKsR3gtXDHft61FQuBUjMwUIQ4g_SdqUgTjg_wdwBQjhrfwVy6nbxuAmpiULw1eIEVvcLryVy-EjQnChz5vky6IVbuDzxXI-0Zyh2bw8AUVnw_e2",alt:"uml diagram"}}),t._v(" "),s("h3",{attrs:{id:"create-helm-chart-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-helm-chart-process"}},[t._v("#")]),t._v(" Create helm chart process")]),t._v(" "),s("ul",[s("li",[t._v("고려사항\n"),s("ul",[s("li",[t._v("site 정보와 상관없이 helm chart 를 생성을 할 수 있도록 한다.")])])]),t._v(" "),s("li",[t._v("검토 필요 사항\n"),s("ul",[s("li",[t._v("TaskRunner 에서 발생하는 status 를 NotifyAgent 로 보내는 기술 검증 필요")]),t._v(" "),s("li",[t._v("TaskRunner 에서 발생하는 status 를 조회하는 기능 검증 필요")])])])]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/TLBBJiCm4BplLwnoWaEGYiI50seBN565gBZquYRRrahyaBqkxHb-Wu_Wl_eHhAbG0cbpicTsufcnnv5Lu6HQW5Yfbd04iT7Mgw0CpeJIbVRAyapLjRPhlEdHKxVhODOiwcBY_HKUtZyF7ry5WAhO1Pn72h1qEooYPi89bkXRnIiNJ5vOAW3byzrf-F0w6s3ty-dZ07noh5VxoPei3xWN5Plpp7EoLdpzfugfvcMg6kA5lTWhqruMg2Bc5P2jKN98hiJE9hEaWADo13aWbdVPDTvY5KX9J2LDG4RAHUT4w90iikoX0qNQEUgFI7zwct_MCzoR55tsbS_SKDMunCSzaya5qvdPexz0tibzkB0_FUPJt1nZzsa9qwjSnc8knVv0KDCfm_tvhC_t-2iq5ADQqvz6hmUDRZMzeJnKJX5WB3fvhzy0",alt:"uml diagram"}}),t._v(" "),s("h3",{attrs:{id:"ci-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ci-process"}},[t._v("#")]),t._v(" CI process")]),t._v(" "),s("ul",[s("li",[t._v("고려사항\n"),s("ul",[s("li",[t._v("TaskAgent 는 Target Cluster 를 Discovery 하는 기능 필요함")]),t._v(" "),s("li",[t._v("application source 는 사이즈가 크지 않으므로 site A 에서 checkout 받음")]),t._v(" "),s("li",[t._v("docker image 사이즈가 커서 네트워크 트래픽 문제가 발생할 수 있음")]),t._v(" "),s("li",[t._v("네트워크 트래픽 문제로 docker repository 는 site B 에 위치해야 함")]),t._v(" "),s("li",[t._v("네트워크 트래픽 문제로 docker build & push 는 site B 에서 수행해야 함")]),t._v(" "),s("li",[t._v("site 간 docker image 동기화 필요함")])])]),t._v(" "),s("li",[t._v("검토 필요 사항\n"),s("ul",[s("li",[t._v("TaskRunner 에서 발생하는 status 를 NotifyAgent 로 보내는 기술 검증 필요")]),t._v(" "),s("li",[t._v("TaskRunner 에서 발생하는 status 를 조회하는 기능 검증 필요")]),t._v(" "),s("li",[t._v("site 간 docker image 동기화 시간 및 간격 검증 필요")])])])]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/XLJ1JkCm4BtxAqOviOSY5RGN3eYKNMdtWheBY4ilZkCMgyxOiiUb_Nl6RMYT1aHEpioRcVUU9xcB90EbpWeHbRGQfYAk3NePP0TpJXbbl4IQoxOrk8AVHNhcjgSm6UBgglR-4kx_La98HIx0SzH1D6uBLJIaeOO9U2jfwKAN3wWh0VpuqoJuzJ8VnUwVPxz7mGT7PhchLnffb7kISVrvffePQf9QQrhWHNGfAFsZ0XdXS1xX_yZGi10674wrqDW2IofapLYMSaZ1sQzKPKB_4oBRCTAXjob-CNSKVdGemx_Kw2CD8HCvJ5sZ0qmdKv4jXybjzX5k82Ja-n3ecARLI-8Gl-RSP75ogGSIlujJa9kKYDP4vJOwxFQuS11Je1U5oB8XRuBPI9vVU20AA8yvUCz5wbMhjKlqSHj3sA1_aunjGNflZP9a79w1zxPcskuDhPCjMDF4xnksZdSZB8qz7zulmWtu55zx69XEhiw1nojYBEbur3A0iLl5_Z8ovll4VKYq-ZFFIdokpn_5Hs6dOynCocMuucNeIJFwI9-_SnpIBvUZX_dW5BSSrTUvmGxLi44vzNgqWXkZtu3_CyHRBkwOBVzktW40",alt:"uml diagram"}}),t._v(" "),s("h3",{attrs:{id:"cd-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cd-process"}},[t._v("#")]),t._v(" CD process")]),t._v(" "),s("ul",[s("li",[t._v("고려사항\n"),s("ul",[s("li",[t._v("Deploy 를 수행하는 시점에 ArgoCD Application 을 생성한다.")]),t._v(" "),s("li",[t._v("ArgoCD Application 도 bitbucket yaml 로 관리한다.")]),t._v(" "),s("li",[t._v("ArgoCD metadata 는 control plane 에 유지한다.")])])])]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/ZLHDZzem4BtxLunoQWzKGcsbgeTg0woqfmfLNVN2nJX3i4Zio1vJ-FSTnw4n4DhD9RRdlVbuC_QJ9-aej8qGNia6OIxyGPjEEjd2carQwKuQMikgqgQ6pvbvOK_ZCMbYTb5stGTOhWeXf2BhuDMZ4rjxWi9hGYXX1bqZQMTT6nS62m7yTMCaMFrQtvqjNnVFTuVVBUdTkQpHq9tjf_I7QKknqBGDwe2qCU_EictU5o0znDM_iQMhxNALq9BNFGDD1LnULkA2IrJMaBFDemfZSZ-2CIpDhIa5kJj-aMvhxz67Bpvcmp_r89DAadoK1jF-ieGCP4rej-XWFfkBs3UOVOlDWA_WWk6cYhYPRKPj1mlnNeo7pCeHbVRA7j6TUvnBPMVeJIP7xf3dHnybbv6f9J8eXxbqWMbw1yOIu4bxyhsA_IJI7Wri37J1xrEBay0nxDlP_cnKOZCAmUbw7oihQnTTTSugz3xp7FlnVwyLTeqz9xytXGrfgJsgWmsKCDUGAz5QM_5Dc88DdiRwS_Dc6BT1zfJGTIwCoQuP0qs_0tusA7XHuLIRSaRq46ylKtqSjfQbaZLU3Tmd7hXHlSdYtonydBXSs2pCHmuJ4RT0Xzu6fp05QN0NOqJ49S10IfUmLxDfeBByBZZGxLGrrzVdgF7tHJ7nn2hmU_i7",alt:"uml diagram"}}),t._v(" "),s("h3",{attrs:{id:"helm-cd-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helm-cd-process"}},[t._v("#")]),t._v(" Helm CD process")]),t._v(" "),s("ul",[s("li",[t._v("고려사항\n"),s("ul",[s("li",[t._v("ArgoCD Helm application 을 생성하면 ArgoCD 가 helm chart 를 배포해줌")]),t._v(" "),s("li",[t._v("ArgoCD helm app. 역시 bitbucket repository 로 관리함")]),t._v(" "),s("li",[t._v("helm app. 내 parameter 설정으로 values.yml 수정함")])])]),t._v(" "),s("li",[t._v("검토 필요 사항\n"),s("ul",[s("li",[t._v("Async process 에 대한 status 조회 방안 필요")])])])]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/ZLHDZzCm4BtxLunoWaEHAa127D3s0sbFg4AikEJYEjF4Qc97zgIq_vvnd1AdJPVjfR7dlVbuC-CdJz9HrzH2U2LhXANmHsrQwMG3EpPffLjfQ2UBGfiIFYVcjJsFrwI9sTaMszfUu1dh1ZOLypCXf2BhuCMZ4tjxXinhGbZ10jfQqi6w9dmOp0JmhnrZmlRtxkvkyxB-VdVvmv8-N5Ob6hgp_PB-E6_9rfhsdJeYvURTHJRr-moaX_3rEdRbIhlPHhJaxvw1fW0kBobnpIKgQyZP-b658RcVdJ4ipQqf1hcxVfPkR-_Hnoy-PCD_wa4cXIJvA0sc_MC9sP4rNRD71yl5KeI-mU9RQ0Py1TSPuAp2OP6FsWuMuhCOBvcL8WhjbJsXk_Gu5yjEq7aYH-gGvqUV99UHg2KIA8UvTe5f-W364k1PU_AzYgks_G1KeO7SGDlvAhOu2Xp2lftjBqP5DgCGd2whKDcgTC5Lwwn2xnFFeH__zrh4fUdztXGsfAKgL4VRKSHC8HFH6blm9ip11azZ_Qav7yPja3qcDCs5CScQCT3q9-07X3el2fnhKye87iBsCjM7OMjOAbdYPE0-yS2DwiqM_sRXmyIbmYPXFdAOWBW5ElIsSmfZa1eF8KP0N0CCfBY4lPfr3ONbTy61RkQgcQxFIUEVgsBYYLNWb_Sl",alt:"uml diagram"}}),t._v(" "),s("h2",{attrs:{id:"etc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc"}},[t._v("#")]),t._v(" ETC")]),t._v(" "),s("ul",[s("li",[t._v("TaskRunner 로 사용 가능한 Open Source 정리")])]),t._v(" "),s("h3",{attrs:{id:"argo-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#argo-workflow"}},[t._v("#")]),t._v(" Argo Workflow")]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/TLHDIyGm4BtdLmIFmbOy2E91jYhAWhgBBdYEoMm9JPEI3rOG_xkJVcJ3jksfVU_DlEcRj6ldcVMXKOGupXJGQ-9ggLjcMKDtI4akMwRzZWaXTKLlClh1_9nWBprMNvIsClJBsFgWpF6245Q1zdJFN5t6EsA1UwOhb4RbAAI_XEBLYqTm3qshc8UEuaOfB9L6koIO48iLw1KQxEqocqyFRVRuLBvaJuz6UoOrsBo0Mzdw3FW0PuBblLsCwi2ufs-RzyrsCi56js6mp-5jy0aNpBDlve2snldAWYD_MLprhHjIokjtHaoRZdF51eIaxEbAhEvJUFIEsg3fSSmouKLncO94aTHS1G4PRmjp2ZHJfA8Y56QonUW71x2WCJ0Imu-TPgrm5OjSvgBGfUipDq8aOvyvJY2N5hoewDUzI8yXpmfYHFt65-bXy_ch3HK5ijqXGYuu8AFo72UdTrZXOkDHw9TAXj7Fq3HnnDCPGP9RY1zD9utSQ7Aq4gTzDTMpL71L3WVS4R86BV2NyGy0",alt:"uml diagram"}}),t._v(" "),s("h3",{attrs:{id:"argo-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#argo-event"}},[t._v("#")]),t._v(" Argo Event")]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/NP4nJyGm38Lt_mghUmS65gOUWhqgI9r3uej2swIoSzn9YF-EIwzSUfcSzvvVFYcDPCFvD8q0Oir8-00oX3WRDXEsQWKRPXDpQvmBqUDZOJ-doqtE8UjsTM2VyFMBOgu0qiSdsOmlVRkD7RaWC1ix64-uXF-o-0sevnewU4uTIJgnfPskyJUAalXUVUVWFJ7yxAhxnCDnJEUxziBH1L0wh5szek4JJYIY3R3U5wVaqS0O94TzR2VNN9Tyj_7VsHYBUMqlUQ2XwFGtVW40",alt:"uml diagram"}}),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/PP4n3u9038Nt_eh6tS71nS60qPsW2VC5wkK2t97sK7--9Q106FkzrxwND95eEFPj0o2bQGWF8BNpdM7JOgQIArrdVCnCLJblyRYGB-4pu-YYRkzIjW5lB_9n1z3D-tWjijMSK-LaHLBB8IS9FPUq5lJcdRm4tk07Esjfoul0zRC9Rm3DnVrvZCCJHYCrjYHYBC48LLr6gwbn4hrUNU71zY-Y9XaRBTZac3eDOLEx9PrCluBguju39EGh_S8N",alt:"uml diagram"}}),t._v(" "),s("h3",{attrs:{id:"tekton"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tekton"}},[t._v("#")]),t._v(" Tekton")]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/RP5D2iCW48NtSmh9if155zs7dY2KN61g94nDL7I4GkdTQqn2VXetEkzxZtbW5HWznw47219x9QuGD1c77WTH9qII71gkiMt9TEAsmNVxNcKcJkcYKPgjAG3iywKaYuvuUTA0dGA7KgTRS3QA3uXqPaTDJlLar9dsYEPKLi56BtUH1eC-pcFy2t2CYJAMDfSy9rFdXOtQvN_rYdt2UVkczJu4Svb9pLweb6dJ3_m0",alt:"uml diagram"}})])}),[],!1,null,null,null);a.default=l.exports}}]);