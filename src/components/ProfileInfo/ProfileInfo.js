import React from 'react'
import './css/ProfileInfo.css'
function ProfileInfo() {
    return (
        <div className="container-fluid mt-3 profileInfoContainer p-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center text-light profileInfoHeader">
                        We Extract Data & Leads From Instagram
                    </h1>
                    <p className="text-center mt-5 profileInfoAbout">
                        Our agency does all the hard work and <br /> gives you the clean targeted data in Sheets
                    </p>
                    <div className="text-center profileInfoBtnBox">
                        <button className="btn profileInfoBtn">
                            GET LEADS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
