import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const KejaksaanAgung = ({infoKa, epusKa, favBooksKa}) => {
    const history = useHistory()

    useEffect(() => {
        const timeout = setTimeout(() => {
            history.push('/')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [history])

    return(
        <>
            {/* {JSON.stringify(favBooksKa)} */}
            <h1 style={{textAlign: "center"}}>{epusKa.infoEpustaka.name}</h1>
            <hr />
            <div className="container">
                <div className="transbox">

                    <div className="row">
                        <div className="column2">
                            <div className="column">
                                <div className="card">
                                    <i class="icon far fa-3x fa-book-open"></i>
                                    <h5>{infoKa.catalogTitle.title}</h5>
                                    <p>{infoKa.catalogTitle.value}</p>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <i class="icon fal fa-3x fa-sticky-note"></i>
                                    <h5>{infoKa.catalogCopy.title}</h5>
                                    <p>{infoKa.catalogCopy.value}</p>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <i class="icon fa-3x fal fa-user-chart"></i>
                                    <h5>{infoKa.membership.title}</h5>
                                    <p>{infoKa.membership.value}</p>
                                </div>
                            </div>
                        </div>

                        <div className="column3">
                            <div className="column">
                                <div className="card">
                                    <i class="icon far fa-3x fa-server"></i>
                                    <h5>{infoKa.booksRent.title}</h5>
                                    <p>{infoKa.booksRent.value}</p>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <i class="icon far fa-3x fa-cog"></i>
                                    <h5>{infoKa.bookRatio.title}</h5>
                                    <p>{infoKa.bookRatio.value.value}</p>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <i class="icon far fa-3x fa-key"></i>
                                    <h5>{infoKa.bookAccessRatio.title}</h5>
                                    <p>{infoKa.bookAccessRatio.value}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column2">
                            <div className="column22">
                                <div className="card cf">
                                    <img className="imgEpustaka" src={epusKa.infoEpustaka.epustaka_logo} style={{width:"150px", height:"auto", paddingTop:"10px"}} />
                                    <div className="pEpustaka">
                                        <p style={{marginTop: "20px", fontWeight: "bold"}}>{epusKa.member}</p>
                                        <p>member</p>
                                    </div>
                                    <div className="pEpustaka">
                                        <p style={{fontWeight: "bold"}}>{epusKa.infoEpustaka.name}</p>
                                        <p>{epusKa.infoEpustaka.position}</p>
                                    </div>
                                    <div className="pEpustaka">
                                        <p style={{fontWeight: "bold"}}>{epusKa.catalog}</p>
                                        <p>koleksi</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column2">
                            <div className="column22">
                                <div className="card">
                                    <table className="cart">
                                        <tr>
                                            <td>{epusKa.chartCategory[0].value}</td>
                                            <td>{epusKa.chartCategory[1].value}</td>
                                            <td>{epusKa.chartCategory[2].value}</td>
                                            <td>{epusKa.chartCategory[3].value}</td>
                                            <td>{epusKa.chartCategory[4].value}</td>
                                            <td>{epusKa.chartCategory[5].value}</td>
                                            <td>{epusKa.chartCategory[6].value}</td>
                                            <td>{epusKa.chartCategory[7].value}</td>
                                        </tr>
                                        <tr className="diagram">
                                            <td valign="bottom"><div style={{width: "10px", height: "40px", display: "inline-block", backgroundColor: "green"}} /></td>
                                            <td valign="bottom"><div style={{width: "10px", height: "34px", display: "inline-block", background:"#f30"}} /></td>
                                            <td valign="bottom"><div style={{width: "10px", height: "34px", display: "inline-block", background:"#abc"}} /></td>
                                            <td valign="bottom"><div style={{width: "10px", height: "32px", display: "inline-block", background:"#de1"}} /></td>
                                            <td valign="bottom"><div style={{width: "10px", height: "17px", display: "inline-block", background:"#ee9"}} /></td>
                                            <td valign="bottom"><div style={{width: "10px", height: "15px", display: "inline-block", background:"rgb(5, 47, 124)"}} /></td>
                                            <td valign="bottom"><div style={{width: "10px", height: "13px", display: "inline-block", background:"lawngreen"}} /></td>
                                            <td valign="bottom"><div style={{width: "10px", height: "68px", display: "inline-block", background:"rgb(128, 13, 103)"}} /></td>
                                        </tr>
                                        <tr>
                                            <th>{epusKa.chartCategory[0].text}</th>
                                            <th>{epusKa.chartCategory[1].text}</th>
                                            <th>{epusKa.chartCategory[2].text}</th>
                                            <th>{epusKa.chartCategory[3].text}</th>
                                            <th>{epusKa.chartCategory[4].text}</th>
                                            <th>{epusKa.chartCategory[5].text}</th>
                                            <th>{epusKa.chartCategory[6].text}</th>
                                            <th>{epusKa.chartCategory[7].text}</th>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column22">
                            {favBooksKa.map((cf)=> (
                                <div key={cf.catalog_id} className="column4 cf">
                                    <div className="card">
                                        <img src={cf.book_cover} style={{width:"auto", height:"80px", paddingTop:"15px"}} />
                                        <h5>{cf.book_title}</h5>
                                        <p>{cf.category_name} <br></br>
                                            {cf.loan_qty} pinjaman
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default KejaksaanAgung;