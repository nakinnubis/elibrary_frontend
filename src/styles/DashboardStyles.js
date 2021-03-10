import styled from 'styled-components';


const DashboardStyles = styled.div`
    .notifications-wrapper{
        border: 1px solid #CED4DA;
        border-top:none;
    }

    .logo-wrapper{
    display: flex;
    justify-content: space-between; 
    padding: 5px 0;
}
.profile-side{
    display: flex; 
    justify-content: space-between; 
    align-items: center;
}
.user-icon{
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1rem;
}
.drop-style{
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    text-transform: capitalize;
    color: #055844;
    padding: 1rem 5rem 1rem 1.5rem;
    border-bottom: 1px solid #EFEFEF;
}
.nav-wrapper{
    border-bottom: 1px solid #CED4DA;
}
.li-style{
    width: calc(100% / 9);
    background: rgba(177, 224, 35, 0.1);
    border: 1px solid #CED4DA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

}
.li-style a{
    display: flex;
 
}
.li-span-style{
    font-size: 0.7rem;
    line-height: 1.125rem;
    padding-left: 0.5rem;
}
.card-style{
    background: rgba(177, 224, 35, 0.1);
    border-radius: 5px;
    height: 9.56rem;
    font-size: 1.125rem;
    line-height: 1.7rem;
    border: 1px solid #B1E023;
    color: #055844;
}
.card-title{
    max-height: 3.7rem;
}

.wel-details {
    display: flex;
    flex-flow: row wrap;
    
}
.wel-box,
.wel-msg {
    border-radius: 4px;
    
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 0.625rem;
    outline: 1px solid green;
}
.wel-box {
    width: 67%;
    margin-right: 3%;
    
    
}

.wel-box .mem-id {
    color: #055844;
    font-weight: bold;
}
.wel-box .active {
    background: rgba(177, 224, 35, 0.1);
    border: none;
    border-radius: 3px;
    font-family: Poppins;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: #B1E023;
    outline: none;
    padding: 0 2rem;
}

.wel-msg {
    width: 30%;
    
    
}
.wel-msg img {
    height: 1.4rem;
    /* align-self: center; */
    outline:1px solid red;
}
.wel-msg p {
    font-family: Poppins;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.125rem;
    color: #777777;
    /* align-self: baseline; */
    outline:1px solid green;

}

.cont-custom {
    padding: 0;
}
.row-custom {
    padding: 0;
    display: flex;
    justify-content: space-between;
}
.col-custom {
    padding: 0.75rem;
}

.wel-h2{
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 2.25rem;
 
}

.quick-action{
    background: #FFFFFF;
    border: 1px solid #CED4DA;
    border-radius: 5px;
    width: 100%;
    display: flex; 
    align-items: center;
    height: 4.75rem;
    font-weight: 800;
    font-size: 1.125rem;
    line-height: 1.7rem;
    
}

.connect {
    border: 1px solid grey;
    border-radius: 4px;
    height: auto;
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0.625rem;
}
.connect .box{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.connect .box input {
    padding: 0.625rem;
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    border-radius: 3px;
}
.connect .box button {
    background: #075F49;
    border-radius: 3px;
    color: #FFFFFF;
    padding: 0.5rem 2rem;
}
.connect p {
    font-size: 0.9rem;
    line-height: 1.125rem;
    color: #777777;
}

.td-block {
    display: block;
    line-height: 1rem;
}
.table-mem td {
    min-width: 6.25rem;
    padding: 1rem 1rem 1rem 0;
}
.table-title{
    display: flex; 
    align-items: center;
    padding: 1rem;
}
.tab-border{
    border: 1px solid #CED4DA;
}


h3.title {
    font-weight: 800;
    font-size: 18px;
    line-height: 6rem;
    letter-spacing: 0.31px;
    text-decoration: underline;
    color: #055844;
}

.filter {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

}

.search-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    background: #F9F8F8;
    border: 1px solid rgba(227, 222, 220, 0.29);
    box-sizing: border-box;
    border-radius: 8px;
}

.search-icon {
    padding-right: 2rem;
    padding-left: 1rem;
}

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

.books {
    background: #075F49;
    border-radius: 5px;
    outline: none;
    border: none;

}

.categories,
.authors {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    color: #000000;
    font-weight: normal;
    border: none;
}

.categories:hover,
.authors:hover {
    background: #FFFFFF;
    color: #000000;
}

.books:hover {
    background: #075F49;
}

.badge-custom,
.badge-cat {
    margin-left: 1rem;
    font-weight: normal;
}

.badge-cat {
    background: #CED4DA;
    color: #000000;

}

.btn-link-custom {
    display: inline;
}

.list-total {
    font-size: 14px;
    letter-spacing: 0.31px;
    color: #777777;
}

.img-cont {
    height: 150px;
    position: relative;
    display: flex;
}

.img-cus {
    height: inherit;
}

.btn-cus {
    display: block;
    bottom: 20px;
    right: 25%;
    background: #075F49;
    border-radius: 5px; 
    color: #FFFFFF;
    outline: none;
    border: none;
    font-weight: normal;

}
.card-lft {
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1rem;
    letter-spacing: 0.31px;
    color: #68676F;

}
.card-rgt {
    font-weight: 800;
    font-size: 0.9rem;
    line-height: 10px;
    letter-spacing: 0.31px;
    color: #055844;
    margin-left: 1rem;
}

.card-ft-right {
    font-weight: bold;
    font-size: 1rem;
    color: #075F49;
}
.card-shadow {
    border: none;
    box-shadow: 0px 7px 20px rgba(202, 203, 207, 0.5);
    border-radius: 0px 0px 6px 6px;
    
}
.pag-col button {
    background: #F5F5FA;
    border-radius: 6px;
    border: none;
    font-weight: normal;
    font-size: 1rem;
    color: #8181A5;
}
.pag-col .inactive, .pag-col .active {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.21px;
    color: #1C1D21;
}
.pag-col .active {
    background: #075F49;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
    color: #FFFFFF;
}
.pag-col p {
    display: inline;
    font-size: 0.9rem;
}
.pag-col input {
    background: #FFFFFF;
    border: 1px solid #CED4DA;
    border-radius: 6px;
    width: 45px;
    margin-left: 0.6rem;
}
.pag-col input:focus {
    outline: none; 
}
.pag-col .go {
    font-weight: normal;
    font-size: 14px;
    margin-left: 0.6rem;
}

@media only screen and (max-width: 990px) {
    .msg-span{
        display: none;
    }
    .wel-msg {
    width: auto;

    }
    .wel-msg img{
        padding-right: 1rem;
    }
}
@media only screen and (max-width: 760px) {
    .logo {
        max-width: 150px;
        height: 60px;
        align-items: center;
    }
    .header-container {
        padding: 1rem 5rem;
        
    }
    .profile-side {
        max-width: 200px;
    }
    .resp-width{
        width: 50px;
    }
    .user-icon{
        font-size: .5rem;
        
    }
}

`

export default DashboardStyles;