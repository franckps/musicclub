export default {
    left: {
        width: 170,
        paddingLeft: 25,
        borderRight: '1px solid #ccc'
    },
    right: {
        width: 'calc(100% - 170px)',
        marginLeft: 170,
        paddingLeft: 25,
        borderRight: '1px solid #ccc'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        height: 67,
    },
    logo: {
        display: "inline-flex",
        height: 67,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 22,
    },
    searchInput: {
        marginLeft: 21,
        backgroundImage: 'url("/serch.png")',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20px 22px',
        paddingLeft: 30,
        overflow: 'visible',
    },

    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'top',
        justifyContent: 'flex-start'
    },
    nav_list_item: {
        listStyle: 'none',
        fontFamily: "'Source Sans Pro', sans-serif",
        fontWeight: 600,
        color: '#3E2AD1',
        filter: 'grayscale()',
        opacity: .7,
        fontSize: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        marginTop: 24,
        position: 'relative'
    },
    nav_list_item_img: {
        position: 'absolute',
        left: 0
    },

    footer: {
        position: 'fixed',
        width: '100%',
        height: 62,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0F1E36',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    section_audio_pause: {
        backgroundColor: 'rgba(245, 30, 46, .3)',
        padding: 17,
        clipPath: 'circle()'
    },
    section_audio_pause_span: {
        backgroundColor: 'rgba(245, 30, 46, .3)',
        padding: 12,
        clipPath: 'circle()'
    },
    section_audio_buttom: {
        marginLeft: 22,
        marginRight: 22
    },
    section_audio_progress: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    section_audio_progress_time: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontWeight: 400,
        color: '#FFF',
        opacity: .5
    },
    progress_content: {
        position: 'relative',
        flex: 1,
        minHeight: 5,
        marginLeft: 10,
        marginRight: 10
    },
    progress: {
        position: 'absolute',
        height: 4,
        top: '50%',
        transform: 'translateY(-100%)',
        width: '100%',
        backgroundColor: '#FFF',
    },
    progressbar: {
        position: 'absolute',
        height: 4,
        top: '0',
        width: '28%',
        backgroundColor: '#F51E38'
    }
}