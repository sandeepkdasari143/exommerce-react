import React from 'react';

export const Header = () => {
    return(
        <header className={styles.headerWrapper}>
            <div className={styles.logoWrapper}>
                <h1 className={styles.logoText}><span className="font-[900] bg-clip-text text-transparent bg-gradient-to-r from-[#D946EF] via-[#BE123C] to-[#BE185D]">Lco</span>Store</h1>
            </div>

            <div>

            </div>

            <div>

            </div>
        </header>
    )
}

const styles = {
    headerWrapper: "flex items-center justify-between border-b border-b-[#BE185D] px-5 py-3",
    logoWrapper: "cursor-pointer",
    logoText:"font-['Cedarville_Cursive'] text-5xl",
    searchWrapper: "",
    searchInput: "",
    searchButton: "",
}