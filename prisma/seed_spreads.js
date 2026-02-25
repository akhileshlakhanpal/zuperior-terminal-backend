
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const spreadData = [
    // Metals
    { symbol: 'XAUUSD', startup_spread: 21, pro_spread: 18, contract_size: 100, leverage: 2000 },
    { symbol: 'XAGUSD', startup_spread: 39, pro_spread: 27, contract_size: 5000, leverage: 2000 },

    // Forex Major
    { symbol: 'USDJPY', startup_spread: 13, pro_spread: 9, contract_size: 100000, leverage: 2000 },
    { symbol: 'USDCHF', startup_spread: 17, pro_spread: 12, contract_size: 100000, leverage: 2000 },
    { symbol: 'USDCAD', startup_spread: 20, pro_spread: 14, contract_size: 100000, leverage: 2000 },
    { symbol: 'GBPUSD', startup_spread: 13, pro_spread: 9, contract_size: 100000, leverage: 2000 },
    { symbol: 'EURUSD', startup_spread: 10, pro_spread: 8, contract_size: 100000, leverage: 2000 },
    { symbol: 'AUDUSD', startup_spread: 12, pro_spread: 8, contract_size: 100000, leverage: 2000 },
    { symbol: 'NZDUSD', startup_spread: 23, pro_spread: 16, contract_size: 100000, leverage: 2000 },

    // Forex Minor
    { symbol: 'NZDJPY', startup_spread: 56, pro_spread: 39, contract_size: 100000, leverage: 2000 },
    { symbol: 'NZDCHF', startup_spread: 20, pro_spread: 14, contract_size: 100000, leverage: 2000 },
    { symbol: 'NZDCAD', startup_spread: 17, pro_spread: 12, contract_size: 100000, leverage: 2000 },
    { symbol: 'GBPNZD', startup_spread: 75, pro_spread: 53, contract_size: 100000, leverage: 2000 },
    { symbol: 'GBPJPY', startup_spread: 29, pro_spread: 21, contract_size: 100000, leverage: 2000 },
    { symbol: 'GBPCHF', startup_spread: 31, pro_spread: 22, contract_size: 100000, leverage: 2000 },
    { symbol: 'GBPCAD', startup_spread: 62, pro_spread: 44, contract_size: 100000, leverage: 2000 },
    { symbol: 'GBPAUD', startup_spread: 33, pro_spread: 23, contract_size: 100000, leverage: 2000 },
    { symbol: 'EURNZD', startup_spread: 70, pro_spread: 49, contract_size: 100000, leverage: 2000 },
    { symbol: 'EURJPY', startup_spread: 31, pro_spread: 22, contract_size: 100000, leverage: 2000 },
    { symbol: 'EURGBP', startup_spread: 18, pro_spread: 13, contract_size: 100000, leverage: 2000 },
    { symbol: 'EURCHF', startup_spread: 33, pro_spread: 22, contract_size: 100000, leverage: 2000 },
    { symbol: 'EURCAD', startup_spread: 38, pro_spread: 27, contract_size: 100000, leverage: 2000 },
    { symbol: 'EURAUD', startup_spread: 44, pro_spread: 31, contract_size: 100000, leverage: 2000 },
    { symbol: 'CHFJPY', startup_spread: 31, pro_spread: 22, contract_size: 100000, leverage: 2000 },
    { symbol: 'CADJPY', startup_spread: 49, pro_spread: 35, contract_size: 100000, leverage: 2000 },
    { symbol: 'CADCHF', startup_spread: 10, pro_spread: 8, contract_size: 100000, leverage: 2000 },
    { symbol: 'AUDJPY', startup_spread: 25, pro_spread: 17, contract_size: 100000, leverage: 2000 },
    { symbol: 'AUDCHF', startup_spread: 12, pro_spread: 8, contract_size: 100000, leverage: 2000 },
    { symbol: 'AUDNZD', startup_spread: 26, pro_spread: 18, contract_size: 100000, leverage: 2000 },
    { symbol: 'AUDCAD', startup_spread: 29, pro_spread: 21, contract_size: 100000, leverage: 2000 },

    // Indices
    { symbol: 'AUS200', startup_spread: 382, pro_spread: 268, contract_size: 1, leverage: 400 },
    { symbol: 'DE30', startup_spread: 21, pro_spread: 14, contract_size: 1, leverage: 400 },
    { symbol: 'FR40', startup_spread: 213, pro_spread: 150, contract_size: 1, leverage: 400 },
    { symbol: 'HK50', startup_spread: 192, pro_spread: 135, contract_size: 1, leverage: 400 },
    { symbol: 'STOXX50', startup_spread: 213, pro_spread: 150, contract_size: 1, leverage: 400 },
    { symbol: 'UK100', startup_spread: 185, pro_spread: 129, contract_size: 1, leverage: 400 },
    { symbol: 'US500', startup_spread: 94, pro_spread: 65, contract_size: 1, leverage: 400 },
    { symbol: 'USTEC', startup_spread: 281, pro_spread: 196, contract_size: 1, leverage: 400 },
    { symbol: 'JP225', startup_spread: 74, pro_spread: 52, contract_size: 1, leverage: 400 },
    { symbol: 'US30', startup_spread: 27, pro_spread: 20, contract_size: 1, leverage: 400 },

    // Crypto
    { symbol: 'BTCUSD', startup_spread: 23.4, pro_spread: 16.38, contract_size: 1, leverage: 400 },
    { symbol: 'ETHUSD', startup_spread: 182, pro_spread: 127, contract_size: 1, leverage: 400 },

    // Energies
    { symbol: 'UKOIL', startup_spread: 126, pro_spread: 90, contract_size: 1000, leverage: 1000 },
    { symbol: 'USOIL', startup_spread: 23, pro_spread: 17, contract_size: 1000, leverage: 1000 },

    // US Stocks
    { symbol: 'AAPL', startup_spread: 26, pro_spread: 18, contract_size: 100, leverage: 20 },
    { symbol: 'AMD', startup_spread: 125, pro_spread: 87, contract_size: 100, leverage: 20 },
    { symbol: 'AMZN', startup_spread: 62, pro_spread: 44, contract_size: 100, leverage: 20 },
    { symbol: 'GOOGL', startup_spread: 42, pro_spread: 29, contract_size: 100, leverage: 20 },
    { symbol: 'MSFT', startup_spread: 125, pro_spread: 87, contract_size: 100, leverage: 20 },
    { symbol: 'NVDA', startup_spread: 125, pro_spread: 87, contract_size: 100, leverage: 20 },
    { symbol: 'TSLA', startup_spread: 31, pro_spread: 22, contract_size: 100, leverage: 20 },

];

async function main() {
    console.log(`Start seeding ${spreadData.length} symbols using raw SQL...`);

    for (const spread of spreadData) {
        // console.log(`Seeding ${spread.symbol}...`);
        try {
            await prisma.$executeRaw`
            INSERT INTO "ib_symbol_spreads" ("id", "symbol", "startup_spread", "pro_spread", "contract_size", "leverage", "updated_at")
            VALUES (gen_random_uuid(), ${spread.symbol}, ${spread.startup_spread}, ${spread.pro_spread}, ${spread.contract_size}, ${spread.leverage}, NOW())
            ON CONFLICT ("symbol") DO UPDATE SET
            "startup_spread" = EXCLUDED."startup_spread",
            "pro_spread" = EXCLUDED."pro_spread",
            "contract_size" = EXCLUDED."contract_size",
            "leverage" = EXCLUDED."leverage",
            "updated_at" = NOW();
        `;

        } catch (err) {
            console.error(`Failed to seed ${spread.symbol}:`, err);
        }
    }

    console.log(`Seeding finished.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
