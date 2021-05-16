import styled from "styled-components"

export const HeaderWrapper = styled.header`
    .white-text {
        color: #FFFFFF !important;
    }

    .green-background {
        background: #055844;

        .logo-wrapper {
            display: flex;
            justify-content: space-between; 
            padding: 5px 0;

            .logo {
                display: flex;
                justify-content: space-between;
                padding-bottom: 1rem;

                .e-lib-logo {
                    max-width: 150px;
                    height: 60px;
                    align-items: center;
                }

                .dropdown {
                    float: left;
                    overflow: hidden;

                    .login-span {
                        padding-left: 2rem;
                    }

                    .signin {
                        padding: 0.5rem 1.5rem;
                        border-radius: 4px;
                        border: none;
                        font-size: 0.9rem;
                        font-weight: bold;
                        background-color: #B1E023;
                        color: #055844;
                    }
                }

            }
            .header-nav {
                border-top: 1px solid rgba(255, 255, 255, 0.15);
                padding-top: 1rem;


                .search {
                    border: 1px solid rgba(227, 222, 220, 0.29);
                    box-shadow: 0px 2px 7px rgba(102, 54, 27, 0.18);
                    border-radius: 0.5rem;
                    padding: 0 0.5rem;
                    width: 30%;

                    .search-input {
                        font-weight: normal;
                        font-size: 14px;
                        padding: 0 5px;
                        border: none;
                        background: #F9F8F8;
                        letter-spacing: 0.31px;
                        color: #777777;
                    }

                    .search-input:focus {
                        outline: none;
                    }

                }

            }
        }
    }
    
`