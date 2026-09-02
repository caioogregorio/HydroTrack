import { useState } from 'react'
import './App.css'

function App() {
  const [consumo, setConsumo] = useState(1200)
  const meta = 2500
  const [historico, setHistorico] = useState([])

  const adicionarAgua = (quantidade) => {
    setConsumo(consumo + quantidade)

    const novaAdicao = {
      quantidade: quantidade,
      horario: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    setHistorico([novaAdicao, ...historico])
  }

  const zerarConsumo = () => {
    setConsumo(0)
    setHistorico([])
  }

  const progresso = Math.min((consumo / meta) * 100, 100)

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span>💧</span>
          <h1>HydroTrack</h1>
        </div>

        <p>Seu consumo de água</p>
      </header>

      <main className="dashboard">
        <section className="welcome">
          <div>
            <h2>Olá! 👋</h2>
            <p>Acompanhe sua hidratação ao longo do dia.</p>
          </div>

          <div className="date">
            <span>Hoje</span>
            <strong>02 Set</strong>
          </div>
        </section>

        <section className="main-card">
          <div className="card-header">
            <div>
              <span className="label">CONSUMO DE HOJE</span>
              <h2>{consumo} ml</h2>
            </div>

            <span className="water-icon">💧</span>
          </div>

          <div className="progress-info">
            <span>Meta diária</span>
            <strong>2.500 ml</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progresso}%` }}
            ></div>
          </div>

          <p className="remaining">
            Você já consumiu <strong>{Math.round(progresso)}%</strong> da sua meta.
          </p>
        </section>

        <section className="quick-actions">
          <h3>Adicionar água</h3>

          <div className="buttons">
            <button onClick={() => adicionarAgua(200)}>+ 200 ml</button>
            <button onClick={() => adicionarAgua(300)}>+ 300 ml</button>
            <button onClick={() => adicionarAgua(500)}>+ 500 ml</button>
          </div>

          <button className="reset-button" onClick={zerarConsumo}>
            Zerar consumo
          </button>

        </section>

        <section className="history">
          <h3>Histórico de hoje</h3>

          {historico.length === 0 ? (
            <p className="empty-history">
              Nenhuma água adicionada ainda.
            </p>
          ) : (
            <div className="history-list">
              {historico.map((item, index) => (
                <div className="history-item" key={index}>
                  <div>
                    <span>💧</span>
                    <strong>+{item.quantidade} ml</strong>
                  </div>

                  <span>{item.horario}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="stats">
          <div className="stat-card">
            <span>💧</span>
            <div>
              <small>Hoje</small>
              <strong>1,2 L</strong>
            </div>
          </div>

          <div className="stat-card">
            <span>🎯</span>
            <div>
              <small>Meta</small>
              <strong>2,5 L</strong>
            </div>
          </div>

          <div className="stat-card">
            <span>🔥</span>
            <div>
              <small>Sequência</small>
              <strong>3 dias</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App