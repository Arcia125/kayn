import DDragonRequest, {
    DDragonRequestTypes,
} from 'RequestClient/DDragonRequest'
import METHOD_NAMES from 'Enums/method-names'

class DDragonSummonerSpellEndpooint {
    constructor(config) {
        this.config = config

        this.list = this.list.bind(this)
    }

    list() {
        return new DDragonRequest(
            this.config,
            'summoner.json',
            DDragonRequestTypes.CDN.DATA,
        )
    }
}

export default DDragonSummonerSpellEndpooint