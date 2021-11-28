import * as fs from 'fs';
import * as path from 'path';

// 대충 만들어놓은 언어 모듈 (by Tilto_)
// root의 lang폴더에서 정해진 규칙에 맞게 언어 설정을 불러옵니다.
export class Lang {
    static async getLangByCode(lang: string, code: string) {
        if (code.split(':').length > 1) {
            // `../../lang/${ns}/${lang}.json`
            let ns = code.split(':')[0];
            let cd = code.split(':')[1];
            let res = fs.statSync(
                path.join(__dirname, '..', '..', 'lang', ns, `${lang}.json`)
            );
            if (res.isFile()) {
                await delete require.cache[
                    require.resolve(
                        path.join(
                            __dirname,
                            '..',
                            '..',
                            'lang',
                            ns,
                            `${lang}.json`
                        )
                    )
                ];
                const language = require(path.join(
                    __dirname,
                    '..',
                    '..',
                    'lang',
                    ns,
                    `${lang}.json`
                ));
                return language[cd] ? language[cd] : code;
            } else {
                return code;
            }
        } else {
            // `../../lang/${lang}.json`
            let res = fs.statSync(
                path.join(__dirname, '..', '..', 'lang', `${lang}.json`)
            );
            if (res.isFile()) {
                await delete require.cache[
                    require.resolve(
                        path.join(__dirname, '..', '..', 'lang', `${lang}.json`)
                    )
                ];
                const language = require(path.join(
                    __dirname,
                    '..',
                    '..',
                    'lang',
                    `${lang}.json`
                ));
                return language[code] ? language[code] : code;
            } else {
                throw code;
            }
        }
    }

    static async getLangNameSpace(lang: string, ns: string) {
        // TODO: 작업 필요
    }
}

export default Lang;
