export default {
    left: {
        width: 170,
        paddingLeft: 25,
        borderRight: '1px solid #ccc'
    },
    right: {
        width: 'calc(100% - 145px)',
        marginLeft: 145,
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

    slider: {
        with: '100%',
        height: 307,
        position: 'relative'
    },
    slider_buttons: {
        position: 'absolute',
        bottom: 9,
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        height: 5,
        width: 'auto',
        zIndex: 3
    },
    slider_button: {
        display: 'inline-block',
        width: 16,
        height: '100%',
        backgroundColor: '#FFF',
        marginLeft: 5,
        clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)'
    },
    slide_list: {
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        listStyle: 'none',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
    slide: {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    slide_text: {
        marginBottom: 40,
        marginLeft: 50,
        width: 235,
        color: '#FFF',
        fontWeight: 600,
        fontSize: 10
    },
    slide_text_album: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    slide_text_artist: {
        display: 'block',
        fontSize: 16,
        marginBottom: 43
    },
    slide_button: {
        backgroundColor: '#FFF',
        fontSize: 10,
        color: '#E6152B',
        padding: 5,
        margin: '8px 4px',
        borderRadius: 3
    },
    slide_button_play: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 15,
        paddingRight: 15,
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